import {
  CONTACT_COMMON_FIELDS,
  CONTACT_OVERVIEW_FIELDS,
  CONTACT_RETAINER_FIELDS,
  CONTACT_UPDATES_FIELDS,
  type ContactServiceCategory,
} from "../../constants/contact-form";
import { CONTACT_LOCATION_OPTIONS } from "../../constants/contact";
import type { ContactLocation } from "../../types/contact";
import { DateTimePicker, Input, Select, Textarea } from "../ui";
import { ContactFormField } from "./ContactFormField";
import { ContactServiceDetails } from "./ContactServiceDetails";
import { ContactServicePicker } from "./ContactServicePicker";
import type { ContactStep } from "./ContactStepper";

interface ContactStepPanelProps {
  readonly step: ContactStep;
  readonly index: number;
  readonly active: boolean;
  readonly selectedServices: readonly ContactServiceCategory[];
  readonly requests: Readonly<Record<string, readonly string[]>>;
  readonly location: ContactLocation;
  readonly onLocationChange: (location: ContactLocation) => void;
  readonly onDurationChange: (duration: string) => void;
  readonly onToggleService: (service: ContactServiceCategory) => void;
  readonly onToggleRequest: (group: string, request: string) => void;
}

export function ContactStepPanel({
  step,
  index,
  active,
  selectedServices,
  requests,
  location,
  onLocationChange,
  onDurationChange,
  onToggleService,
  onToggleRequest,
}: ContactStepPanelProps) {
  return (
    <section aria-labelledby={`step-title-${step.id}`} data-step-index={index} hidden={!active}>
      <h2 className="mb-5 text-xl font-bold" id={`step-title-${step.id}`}>
        {index + 1}. {step.title}
      </h2>
      {step.kind === "customer" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Input autoComplete="name" label="Full name" name="name" required={active} />
          <Input autoComplete="tel" label="Phone / WhatsApp number" name="phone" type="tel" />
          <Input autoComplete="email" label="Email address" name="email" required={active} type="email" />
          {CONTACT_COMMON_FIELDS.map((field) => (
            <ContactFormField field={field} key={field.key}
              onValueChange={field.key === "supportDuration" ? onDurationChange : undefined} />
          ))}
        </div>
      )}
      {step.kind === "services" && (
        <ContactServicePicker onToggleService={onToggleService} selectedServices={selectedServices} />
      )}
      {step.kind === "service" && step.group && (
        <ContactServiceDetails group={step.group} onToggleRequest={onToggleRequest}
          requests={requests[step.group.key] ?? []} />
      )}
      {step.kind === "overview" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Select label="Current service location" onChange={(value) => {
            const option = CONTACT_LOCATION_OPTIONS.find((item) => item.value === value);
            if (option) onLocationChange(option.value);
          }} options={CONTACT_LOCATION_OPTIONS} value={location} />
          {CONTACT_OVERVIEW_FIELDS.map((field) => (
            <div className={field.type === "textarea" ? "sm:col-span-2" : ""} key={field.key}>
              <ContactFormField field={field} />
            </div>
          ))}
          <div className="sm:col-span-2">
            <Textarea label="Describe what you need done" maxLength={5000} minLength={10}
              name="message" required={active} />
          </div>
        </div>
      )}
      {step.kind === "retainer" && (
        <div className="grid gap-4 sm:grid-cols-2">
          {CONTACT_RETAINER_FIELDS.map((field) => <ContactFormField field={field} key={field.key} />)}
        </div>
      )}
      {step.kind === "updates" && (
        <div className="grid gap-4 sm:grid-cols-2">
          {CONTACT_UPDATES_FIELDS.map((field) => <ContactFormField field={field} key={field.key} />)}
          <label className="flex items-start gap-2 text-sm text-muted sm:col-span-2">
            <input className="mt-1 accent-brand" name="thirdPartyCosts" required={active} type="checkbox" value="accepted" />
            Third-party costs (such as hotels, vendors, drivers or government fees) are separate from Omoodo’s service fee.
          </label>
        </div>
      )}
      {step.kind === "declaration" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Type your full name as your signature" name="signature" required={active} />
          <DateTimePicker id="declaration-date" label="Declaration date" name="declarationDate" required={active} type="date" />
          <label className="flex items-start gap-2 text-sm text-muted sm:col-span-2">
            <input className="mt-1 accent-brand" name="declaration" required={active} type="checkbox" value="authorised" />
            I confirm these details are accurate and authorise Omoodo to arrange the request once I approve the quotation.
          </label>
        </div>
      )}
    </section>
  );
}
