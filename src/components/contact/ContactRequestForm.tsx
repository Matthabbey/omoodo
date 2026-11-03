"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle } from "lucide-react";
import {
  CONTACT_LOCATION_OPTIONS,
  CONTACT_PAGE_COPY,
  ERRAND_CUSTOMER_TYPES,
  ERRAND_SERVICE_OPTIONS,
} from "../../constants/contact";
import { WHATSAPP_NUMBER } from "../../constants/whatsapp";
import { buildErrandMessage, buildWhatsAppHref } from "../../lib/whatsapp";
import type { ErrandCustomerType, ErrandService } from "../../types/contact";
import { Button, Input, Select, Textarea } from "../ui";

const copy = CONTACT_PAGE_COPY;
const PREFILL_LOCATIONS = new Set(["lagos", "abuja", "port-harcourt"]);

interface SelectErrors {
  readonly customerType?: string;
  readonly service?: string;
}

function readField(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
}

interface ContactRequestFormProps {
  /** Heading level for the form title, so it nests correctly wherever the form is embedded. */
  readonly titleAs?: "h2" | "h3";
}

export function ContactRequestForm({ titleAs = "h2" }: ContactRequestFormProps) {
  const Title = titleAs;
  const params = useSearchParams();
  const locationParam = params.get("location");
  const serviceParam = params.get("service");
  const configured = WHATSAPP_NUMBER.length > 0;

  const [customerType, setCustomerType] = useState<ErrandCustomerType | "">(
    locationParam === "international" ? "diaspora" : "",
  );
  const [service, setService] = useState<ErrandService | "">(
    () => ERRAND_SERVICE_OPTIONS.find((option) => option.value === serviceParam)?.value ?? "",
  );
  const [selectErrors, setSelectErrors] = useState<SelectErrors>({});
  const [readyHref, setReadyHref] = useState<string | null>(null);

  const initialLocation =
    locationParam && PREFILL_LOCATIONS.has(locationParam)
      ? (CONTACT_LOCATION_OPTIONS.find((option) => option.value === locationParam)?.label ?? "")
      : "";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const errors: SelectErrors = {
      customerType: customerType ? undefined : copy.selectRequired,
      service: service ? undefined : copy.selectRequired,
    };
    setSelectErrors(errors);
    const nativeValid = form.reportValidity();
    if (!nativeValid || errors.customerType || errors.service || !configured) return;

    const data = new FormData(form);
    const message = buildErrandMessage({
      name: readField(data, "name"),
      phone: readField(data, "phone"),
      customerType: ERRAND_CUSTOMER_TYPES.find((option) => option.value === customerType)?.label ?? "",
      location: readField(data, "location"),
      service: ERRAND_SERVICE_OPTIONS.find((option) => option.value === service)?.label ?? "",
      timing: readField(data, "timing"),
      details: readField(data, "details"),
    });
    const href = buildWhatsAppHref(WHATSAPP_NUMBER, message);
    setReadyHref(href);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} suppressHydrationWarning>
      <div>
        <Title className="text-2xl font-bold tracking-tight text-foreground">{copy.formTitle}</Title>
        <p className="mt-1 text-sm text-muted">{copy.requiredNote}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input autoComplete="name" id="errand-name" label={copy.fields.name.label} maxLength={120} name="name" placeholder={copy.fields.name.placeholder} required />
        <Input autoComplete="tel" id="errand-phone" inputMode="tel" label={copy.fields.phone.label} maxLength={40} name="phone" placeholder={copy.fields.phone.placeholder} required type="tel" />
        <Select
          error={selectErrors.customerType}
          id="errand-customer-type"
          label={copy.fields.customerType.label}
          onChange={(value) => {
            setCustomerType(ERRAND_CUSTOMER_TYPES.find((option) => option.value === value)?.value ?? "");
            setSelectErrors((current) => ({ ...current, customerType: undefined }));
          }}
          options={ERRAND_CUSTOMER_TYPES}
          placeholder={copy.fields.customerType.placeholder}
          value={customerType}
        />
        <Input defaultValue={initialLocation} id="errand-location" label={copy.fields.location.label} maxLength={120} name="location" placeholder={copy.fields.location.placeholder} required />
        <Select
          error={selectErrors.service}
          id="errand-service"
          label={copy.fields.service.label}
          onChange={(value) => {
            setService(ERRAND_SERVICE_OPTIONS.find((option) => option.value === value)?.value ?? "");
            setSelectErrors((current) => ({ ...current, service: undefined }));
          }}
          options={ERRAND_SERVICE_OPTIONS}
          placeholder={copy.fields.service.placeholder}
          value={service}
        />
        <Input id="errand-timing" label={copy.fields.timing.label} maxLength={120} name="timing" placeholder={copy.fields.timing.placeholder} />
      </div>
      <Textarea className="min-h-28" id="errand-details" label={copy.fields.details.label} maxLength={2000} minLength={10} name="details" placeholder={copy.fields.details.placeholder} required />

      {!configured ? (
        <p className="text-sm font-medium text-red-600" role="alert">
          {copy.notConfigured}
        </p>
      ) : null}
      {readyHref ? (
        <p className="text-sm font-medium text-accent-deep" role="status">
          {copy.successNote}{" "}
          <a className="font-semibold text-brand underline underline-offset-2 hover:text-brand-deep" href={readyHref} rel="noopener noreferrer" target="_blank">
            {copy.fallbackLinkLabel}
          </a>
        </p>
      ) : null}

      <div>
        <Button className="w-full font-bold sm:w-auto" disabled={!configured} size="lg" type="submit" variant="brand">
          {copy.submitLabel}
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
