import type { ServiceSlug } from "./service";

export type ContactService = ServiceSlug | "general";
export type ContactLocation =
  | "lagos"
  | "abuja"
  | "port-harcourt"
  | "other-nigeria"
  | "international";

export type ErrandCustomerType = "individual" | "family" | "diaspora" | "professional" | "business";
export type ErrandService = ServiceSlug | "unsure";

export interface ErrandOption<Value extends string> {
  readonly value: Value;
  readonly label: string;
}

/** The answers that become the WhatsApp message. Select answers carry their labels. */
export interface ErrandRequest {
  readonly name: string;
  readonly phone: string;
  readonly customerType: string;
  readonly location: string;
  readonly service: string;
  readonly timing: string;
  readonly details: string;
}

export type ContactBulletIcon = "message-circle" | "globe" | "receipt";

export interface ContactField {
  readonly label: string;
  readonly placeholder?: string;
  readonly hint?: string;
}

export interface ContactPageCopy {
  readonly headline: string;
  readonly intro: string;
  readonly bullets: readonly { readonly iconName: ContactBulletIcon; readonly label: string }[];
  readonly formTitle: string;
  readonly requiredNote: string;
  readonly fields: {
    readonly name: ContactField;
    readonly phone: ContactField;
    readonly customerType: ContactField;
    readonly location: ContactField;
    readonly service: ContactField;
    readonly timing: ContactField;
    readonly details: ContactField;
  };
  readonly selectRequired: string;
  readonly submitLabel: string;
  readonly successNote: string;
  readonly fallbackLinkLabel: string;
  readonly notConfigured: string;
}
