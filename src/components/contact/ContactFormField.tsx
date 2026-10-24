import { useState } from "react";
import type { ContactFieldDefinition } from "../../constants/contact-form";
import { DateTimePicker, Input, Select, Textarea } from "../ui";

interface ContactFormFieldProps {
  readonly field: ContactFieldDefinition;
  readonly onValueChange?: (value: string) => void;
  readonly required?: boolean;
}

export function ContactFormField({ field, onValueChange, required = false }: ContactFormFieldProps) {
  const fieldId = `contact-${field.key}`;
  const [selectedValue, setSelectedValue] = useState("");

  if (field.type === "multiselect") {
    return (
      <fieldset className="grid gap-2">
        <legend className="text-xs font-semibold text-foreground">{field.label}</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {field.options?.map((option) => (
            <label className="flex items-center gap-2 text-sm text-muted" key={option}>
              <input className="accent-brand" name={field.key} type="checkbox" value={option} />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
    );
  }

  if (field.type === "select") {
    return (
        <div className="grid gap-1.5">
          <Select
            id={fieldId}
            label={field.label}
            onChange={(value) => {
              setSelectedValue(value);
              onValueChange?.(value);
            }}
            options={[
              { value: "", label: "Select an option" },
              ...(field.options ?? []).map((option) => ({ value: option, label: option })),
            ]}
            value={selectedValue}
          />
          <input name={field.key} type="hidden" value={selectedValue} />
        </div>
    );
  }

  if (field.type === "textarea") {
    return (
        <Textarea id={fieldId} label={field.label} name={field.key} placeholder={field.placeholder} />
    );
  }

  if (field.type === "date" || field.type === "time" || field.type === "datetime") {
    return (
        <DateTimePicker
          id={fieldId}
          label={field.label}
          name={field.key}
          required={required}
          type={field.type}
        />
    );
  }

  return (
    <Input
        id={fieldId}
        max={field.type === "number" ? 1000000 : undefined}
        min={field.type === "number" ? 0 : undefined}
        label={field.label}
        name={field.key}
        placeholder={field.placeholder}
        type={field.type === "number" ? "number" : field.type === "email" || field.type === "tel" || field.type === "url" ? field.type : "text"}
        hint={field.hint}
        />
  );
}
