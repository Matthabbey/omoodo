export interface FooterLink {
  readonly label: string;
  readonly href: string;
  /** Opens in a new tab (used for WhatsApp). */
  readonly external?: boolean;
}

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly FooterLink[];
}
