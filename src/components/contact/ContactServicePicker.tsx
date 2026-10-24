import { CONTACT_SERVICE_OPTIONS } from "../../constants/contact";
import { CONTACT_SERVICE_CATEGORIES, type ContactServiceCategory } from "../../constants/contact-form";

interface ContactServicePickerProps {
  readonly selectedServices: readonly ContactServiceCategory[];
  readonly onToggleService: (service: ContactServiceCategory) => void;
}

export function ContactServicePicker({
  selectedServices,
  onToggleService,
}: ContactServicePickerProps) {
  return (
    <div className="grid gap-4">
      <p className="text-sm text-muted">Select every service you need. We’ll ask a few specific questions for each one.</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {CONTACT_SERVICE_CATEGORIES.map((service) => {
          const option = CONTACT_SERVICE_OPTIONS.find((item) => item.value === service);
          const checked = selectedServices.includes(service);
          return (
            <label
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 text-sm font-semibold transition ${
                checked ? "border-brand bg-brand-soft text-brand" : "border-border bg-surface hover:border-brand/50"
              }`}
              key={service}
            >
              <input checked={checked} className="accent-brand" onChange={() => onToggleService(service)} type="checkbox" />
              {option?.label}
            </label>
          );
        })}
      </div>
      {!selectedServices.length && (
        <p className="text-xs text-muted">You can continue without selecting a service for a general enquiry.</p>
      )}
    </div>
  );
}
