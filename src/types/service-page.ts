export type ServiceShareStatus = "idle" | "copied" | "failed";

export interface ServiceShareLinksProps {
  /** Absolute URL of the page being shared. */
  readonly url: string;
  /** Short line used as the email subject and the lead of the shared message. */
  readonly title: string;
}
