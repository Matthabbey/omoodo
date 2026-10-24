import { NextResponse } from "next/server";
import { CONTACT_LOCATION_OPTIONS } from "../../../constants/contact";
import {
  CONTACT_OVERVIEW_FIELDS,
  CONTACT_REQUEST_GROUPS,
  CONTACT_RETAINER_FIELDS,
  CONTACT_SERVICE_CATEGORIES,
} from "../../../constants/contact-form";
import type { ContactRequest } from "../../../types/contact";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string" && item.length <= 200);
}

function validateServiceRequests(
  value: unknown,
  services: readonly string[],
): Record<string, string[]> | null {
  if (!isRecord(value)) return null;
  const groups = Object.values(CONTACT_REQUEST_GROUPS).flat();
  const entries = Object.entries(value);
  if (entries.length > groups.length) return null;
  const validated: Record<string, string[]> = {};
  for (const [key, requests] of entries) {
    const group = groups.find((candidate) => candidate.key === key);
    if (!group || !services.includes(group.service) || !isStringArray(requests) ||
      requests.some((request) => !group.requests.includes(request))) return null;
    validated[key] = requests;
  }
  return validated;
}

function validateDetails(value: unknown): Record<string, string | string[]> | null {
  if (!isRecord(value) || Object.keys(value).length > 80) return null;
  const details: Record<string, string | string[]> = {};
  for (const [key, field] of Object.entries(value)) {
    if (key.length > 80) return null;
    if (typeof field === "string" && field.length <= 5000) {
      details[key] = field;
    } else if (isStringArray(field) && field.length <= 30) {
      details[key] = field;
    } else {
      return null;
    }
  }
  return details;
}

function hasOnlyCurrentOrFutureDates(details: Record<string, string | string[]>): boolean {
  const dateFields = [
    ...CONTACT_OVERVIEW_FIELDS,
    ...CONTACT_RETAINER_FIELDS,
    ...Object.values(CONTACT_REQUEST_GROUPS).flat().flatMap((group) => group.fields),
  ].filter((field) => field.type === "date" || field.type === "datetime");
  const fieldTypes = new Map(dateFields.map((field) => [field.key, field.type]));
  fieldTypes.set("declarationDate", "date");
  const today = new Date().toISOString().slice(0, 10);

  return Array.from(fieldTypes).every(([key, type]) => {
    const value = details[key];
    if (typeof value !== "string" || !value) return true;
    const date = value.slice(0, 10);
    const dateTimeIsValid = type === "datetime"
      ? /^\d{4}-\d{2}-\d{2}T([01]\d|2[0-3]):[0-5]\d$/.test(value)
      : !value.includes("T");
    const parsedDate = new Date(`${date}T00:00:00.000Z`);
    return /^\d{4}-\d{2}-\d{2}$/.test(date) &&
      !Number.isNaN(parsedDate.getTime()) &&
      parsedDate.toISOString().slice(0, 10) === date &&
      date >= today && dateTimeIsValid;
  });
}

function validateContactRequest(value: unknown): ContactRequest | null {
  if (!isRecord(value)) return null;
  const { name, email, phone, service, services, serviceRequests, location, message, details } = value;
  if (typeof name !== "string" || typeof email !== "string" ||
    typeof phone !== "string" || typeof service !== "string" ||
    typeof location !== "string" || typeof message !== "string") return null;
  if (!Array.isArray(services)) return null;
  const validatedServices = services
    .map((item) => CONTACT_SERVICE_CATEGORIES.find((category) => category === item))
    .filter((item): item is (typeof CONTACT_SERVICE_CATEGORIES)[number] => item !== undefined);
  if (validatedServices.length !== services.length ||
    new Set(validatedServices).size !== validatedServices.length) return null;
  const primaryService: ContactRequest["service"] = validatedServices[0] ?? "general";
  if (service !== primaryService) return null;
  const validatedRequests = validateServiceRequests(serviceRequests, validatedServices);
  const validatedDetails = validateDetails(details);
  const validLocation = CONTACT_LOCATION_OPTIONS.find((option) => option.value === location);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const declarationDate = validatedDetails?.declarationDate;
  if (!name.trim() || name.length > 120 || !validEmail || email.length > 254 ||
    phone.length > 40 || !validLocation || !validatedRequests || !validatedDetails ||
    typeof validatedDetails.signature !== "string" || !validatedDetails.signature.trim() ||
    typeof declarationDate !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(declarationDate) ||
    !hasOnlyCurrentOrFutureDates(validatedDetails) ||
    validatedDetails.thirdPartyCosts !== "accepted" || validatedDetails.declaration !== "authorised" ||
    message.trim().length < 10 || message.length > 5000) return null;
  return {
    name: name.trim(),
    email: email.trim(),
    phone,
    service: primaryService,
    services: validatedServices,
    serviceRequests: validatedRequests,
    location: validLocation.value,
    message,
    details: validatedDetails,
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const contactRequest = validateContactRequest(body);
  if (!contactRequest) {
    return NextResponse.json({ success: false, message: "Check the required fields and try again." }, { status: 400 });
  }

  const backendUrl = process.env.CONTACT_BACKEND_URL;
  if (!backendUrl) {
    return NextResponse.json(
      { success: false, message: "Contact submission is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  try {
    const backendResponse = await fetch(backendUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactRequest),
      signal: AbortSignal.timeout(10000),
    });
    if (!backendResponse.ok) {
      console.error("Contact backend rejected a submission.", backendResponse.status);
      return NextResponse.json(
        { success: false, message: "We couldn’t send your request right now. Please try again later." },
        { status: 502 }
      );
    }
  } catch {
    console.error("Contact backend request failed.");
    return NextResponse.json(
      { success: false, message: "We couldn’t send your request right now. Please try again later." },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true, message: "Thank you. Your request has been sent." });
}
