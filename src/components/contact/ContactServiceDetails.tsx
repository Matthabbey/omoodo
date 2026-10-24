import { CONTACT_REQUEST_GROUPS } from "../../constants/contact-form";
import type { ContactServiceCategory, ContactRequestGroup } from "../../constants/contact-form";
import { ContactFormField } from "./ContactFormField";

interface ContactServiceDetailsProps {
  readonly group: ContactRequestGroup;
  readonly requests: readonly string[];
  readonly onToggleRequest: (groupKey: string, request: string) => void;
}

export function getContactGroups(services: readonly ContactServiceCategory[]) {
  return Object.values(CONTACT_REQUEST_GROUPS).flat()
    .filter((group) => services.includes(group.service));
}

export function ContactServiceDetails({
  group,
  requests,
  onToggleRequest,
}: ContactServiceDetailsProps) {
  return (
    <div className="grid gap-5">
      <p className="text-sm text-muted">Choose the tasks that apply. Details appear once you select a task.</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {group.requests.map((request) => (
          <label className="flex items-start gap-2 rounded-lg border border-border bg-surface p-3 text-sm text-muted" key={request}>
            <input
              checked={requests.includes(request)}
              className="mt-1 accent-brand"
              name={`request_${group.key}`}
              onChange={() => onToggleRequest(group.key, request)}
              type="checkbox"
              value={request}
            />
            {request}
          </label>
        ))}
      </div>
      {requests.length > 0 && (
        <div className="grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
          {group.fields
            .filter((field) => !field.forRequests || field.forRequests.some((request) => requests.includes(request)))
            .map((field) => (
              <div className={field.type === "textarea" ? "sm:col-span-2" : ""} key={field.key}>
                <ContactFormField field={field} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
