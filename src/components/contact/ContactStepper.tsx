import type { ContactRequestGroup } from "../../constants/contact-form";

export interface ContactStep {
  readonly id: string;
  readonly title: string;
  readonly kind: "customer" | "services" | "service" | "overview" | "retainer" | "updates" | "declaration";
  readonly group?: ContactRequestGroup;
}

interface ContactStepperProps {
  readonly steps: readonly ContactStep[];
  readonly activeIndex: number;
}

export function ContactStepper({ steps, activeIndex }: ContactStepperProps) {
  const activeStep = steps[activeIndex];
  return (
    <nav aria-label="Form progress" className="grid gap-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-wider text-brand">
          Step {activeIndex + 1} of {steps.length}
        </p>
        <p aria-live="polite" className="truncate text-sm font-semibold text-foreground">
          {activeStep?.title}
        </p>
      </div>
      <ol className="flex gap-1.5" aria-label="Request steps">
        {steps.map((step, index) => (
          <li
            aria-current={index === activeIndex ? "step" : undefined}
            aria-label={`${step.title}${index < activeIndex ? ", complete" : index === activeIndex ? ", current" : ""}`}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              index <= activeIndex ? "bg-brand" : "bg-border"
            }`}
            key={step.id}
          />
        ))}
      </ol>
    </nav>
  );
}
