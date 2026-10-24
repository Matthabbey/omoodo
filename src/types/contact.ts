import type { ServiceSlug } from "./service";

export type ContactService = ServiceSlug | "general";
export type ContactLocation =
  | "lagos"
  | "abuja"
  | "port-harcourt"
  | "other-nigeria"
  | "international";

export interface ContactRequest {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly service: ContactService;
  readonly services: readonly Exclude<ContactService, "general">[];
  readonly serviceRequests: Readonly<Record<string, readonly string[]>>;
  readonly location: ContactLocation;
  readonly message: string;
  readonly details: Readonly<Record<string, string | readonly string[]>>;
}

export interface ContactApiResponse {
  readonly success: boolean;
  readonly message: string;
}
