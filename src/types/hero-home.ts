export type HeroIconName =
  | "shield-check"
  | "car"
  | "building"
  | "sparkles"
  | "shopping-bag"
  | "map-pin"
  | "camera"
  | "receipt"
  | "check"
  | "message-square"
  | "user-check"
  | "user"
  | "users"
  | "globe"
  | "briefcase"
  | "house"
  | "concierge-bell"
  | "bed"
  | "calendar-heart"
  | "heart-handshake";

export interface HeroCta {
  readonly label: string;
  readonly href: string;
}

export interface HeroImage {
  readonly src: string;
  readonly alt: string;
}

export interface HeroTrustFact {
  readonly iconName: HeroIconName;
  readonly label: string;
}
