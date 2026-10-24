import { Select } from "./Select";
import { getTimeOptions } from "./date-time-picker-utils";

interface DateTimePickerTimePanelProps {
  readonly id: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
}

export function DateTimePickerTimePanel({
  id,
  value,
  onChange,
}: DateTimePickerTimePanelProps) {
  return (
    <div className="border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
      <Select
        id={`${id}-time`}
        label="Choose a time"
        onChange={onChange}
        options={[{ value: "", label: "Choose a time" }, ...getTimeOptions()]}
        value={value}
      />
      <p className="mt-2 text-xs text-muted">Select both a date and time to complete this field.</p>
    </div>
  );
}
