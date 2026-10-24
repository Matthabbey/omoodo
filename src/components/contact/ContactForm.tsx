"use client";

import { useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  CONTACT_SERVICE_CATEGORIES,
  type ContactServiceCategory,
} from "../../constants/contact-form";
import { CONTACT_DEFAULTS, CONTACT_LOCATION_OPTIONS } from "../../constants/contact";
import type { ContactApiResponse, ContactLocation, ContactRequest } from "../../types/contact";
import { Button } from "../ui";
import { getContactGroups } from "./ContactServiceDetails";
import { ContactStepPanel } from "./ContactStepPanel";
import { ContactStepper, type ContactStep } from "./ContactStepper";

function isContactApiResponse(value: unknown): value is ContactApiResponse {
  return typeof value === "object" && value !== null &&
    "success" in value && typeof value.success === "boolean" &&
    "message" in value && typeof value.message === "string";
}

function getInitialService(value: string | null): ContactServiceCategory[] {
  const service = CONTACT_SERVICE_CATEGORIES.find((item) => item === value);
  return service ? [service] : [];
}

function makeSteps(services: readonly ContactServiceCategory[], ongoing: boolean): ContactStep[] {
  const serviceSteps = getContactGroups(services).map((group) => ({
    id: group.key, title: group.label, kind: "service" as const, group,
  }));
  const steps: ContactStep[] = [
    { id: "customer", title: "Your details", kind: "customer" },
    { id: "services", title: "Choose services", kind: "services" },
    ...serviceSteps,
    { id: "overview", title: "Request overview", kind: "overview" },
  ];
  if (ongoing) steps.push({ id: "retainer", title: "Concierge retainer", kind: "retainer" });
  return [
    ...steps,
    { id: "updates", title: "Updates & payment", kind: "updates" },
    { id: "declaration", title: "Declaration", kind: "declaration" },
  ];
}

function collectDetails(data: FormData): Record<string, string | readonly string[]> {
  const entries = new Map<string, string[]>();
  data.forEach((value, key) => {
    if (["name", "email", "phone", "location", "message"].includes(key) ||
      key.startsWith("request_") || typeof value !== "string") return;
    entries.set(key, [...(entries.get(key) ?? []), value]);
  });
  return Object.fromEntries(Array.from(entries, ([key, values]) => [
    key, values.length > 1 ? values : values[0] ?? "",
  ]));
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const formBodyRef = useRef<HTMLDivElement>(null);
  const [selectedServices, setSelectedServices] = useState(
    () => getInitialService(searchParams.get("service"))
  );
  const [serviceRequests, setServiceRequests] = useState<Record<string, string[]>>({});
  const [location, setLocation] = useState<ContactLocation>(() =>
    CONTACT_LOCATION_OPTIONS.find((item) => item.value === searchParams.get("location"))?.value ??
    CONTACT_DEFAULTS.location
  );
  const [ongoing, setOngoing] = useState(false);
  const [activeStepId, setActiveStepId] = useState("customer");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<ContactApiResponse | null>(null);
  const steps = makeSteps(selectedServices, ongoing);
  const activeIndex = Math.max(0, steps.findIndex((step) => step.id === activeStepId));
  function toggleService(service: ContactServiceCategory) {
    setSelectedServices((current) =>
      current.includes(service) ? current.filter((item) => item !== service) : [...current, service]
    );
  }

  function toggleRequest(group: string, request: string) {
    setServiceRequests((current) => {
      const selected = current[group] ?? [];
      return {
        ...current,
        [group]: selected.includes(request)
          ? selected.filter((item) => item !== request)
          : [...selected, request],
      };
    });
  }

  function navigateStep(direction: -1 | 1) {
    const section = formRef.current?.querySelector<HTMLElement>(`[data-step-index="${activeIndex}"]`);
    const invalid = direction > 0 ? section?.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(":invalid") : null;
    if (invalid) {
      invalid.reportValidity();
      return;
    }
    const missingDate = direction > 0
      ? section?.querySelector<HTMLInputElement>("[data-required-value]")
      : null;
    if (missingDate && !missingDate.value) {
      const controlId = missingDate.dataset.requiredControl;
      if (controlId) section?.querySelector<HTMLButtonElement>(`#${CSS.escape(controlId)}`)?.focus();
      const needsTime = missingDate.dataset.requiredTime === "true";
      setFeedback({
        success: false,
        message: needsTime
          ? "Please choose both a date and time before continuing."
          : "Please complete the required date before continuing.",
      });
      return;
    }
    const incompleteDateTime = direction > 0
      ? section?.querySelector<HTMLInputElement>("[data-date-time-control]")
      : null;
    if (incompleteDateTime?.value && !incompleteDateTime.value.includes("T")) {
      const controlId = incompleteDateTime.dataset.dateTimeControl;
      if (controlId) section?.querySelector<HTMLButtonElement>(`#${CSS.escape(controlId)}`)?.focus();
      setFeedback({ success: false, message: "Please choose a time for the selected date, or clear the date." });
      return;
    }
    const next = steps[activeIndex + direction];
    if (next) {
      setActiveStepId(next.id);
      if (formBodyRef.current) formBodyRef.current.scrollTop = 0;
      setFeedback(null);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (activeIndex < steps.length - 1) {
      navigateStep(1);
      return;
    }
    setIsSubmitting(true);
    setFeedback(null);
    const data = new FormData(event.currentTarget);
    const request: ContactRequest = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      service: selectedServices[0] ?? "general",
      services: selectedServices,
      serviceRequests: Object.fromEntries(
        getContactGroups(selectedServices).map((group) => [group.key, serviceRequests[group.key] ?? []])
      ),
      location,
      message: String(data.get("message") ?? ""),
      details: collectDetails(data),
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });
      const result: unknown = await response.json();
      setFeedback(isContactApiResponse(result) ? result : {
        success: false, message: "We couldn’t process your request. Please try again.",
      });
    } catch {
      setFeedback({ success: false, message: "We couldn’t connect. Please try again shortly." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid h-full min-h-0 grid-rows-[auto_minmax(0,1fr)_auto_auto] gap-3 sm:gap-5" onSubmit={handleSubmit} ref={formRef}>
      <ContactStepper activeIndex={activeIndex} steps={steps} />
      <div className="min-h-0 overflow-y-auto overscroll-contain pr-1" ref={formBodyRef}>
        {steps.map((step, index) => (
          <ContactStepPanel
            active={index === activeIndex}
            index={index}
            key={step.id}
            location={location}
            onDurationChange={(value) => setOngoing(value === "Ongoing (Concierge retainer)")}
            onLocationChange={setLocation}
            onToggleRequest={toggleRequest}
            onToggleService={toggleService}
            requests={serviceRequests}
            selectedServices={selectedServices}
            step={step}
          />
        ))}
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-border pt-5">
        <Button className="w-fit" disabled={activeIndex === 0 || isSubmitting}
          onClick={() => navigateStep(-1)} type="button" variant="outline">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back
        </Button>
        {activeIndex === steps.length - 1 ? (
          <Button className="w-fit" disabled={isSubmitting} loading={isSubmitting} type="submit">
            Send your request <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        ) : (
          <Button className="w-fit" onClick={() => navigateStep(1)} type="button">
            Continue <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
        )}
      </div>
      {feedback && (
        <p className={feedback.success ? "text-sm font-semibold text-accent-deep" : "text-sm font-semibold text-red-700"} role="status">
          {feedback.message}
        </p>
      )}
    </form>
  );
}
