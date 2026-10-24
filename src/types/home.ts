import type { ReactNode } from "react";

export interface ServicePromise {
  readonly title: string;
  readonly description: string;
  readonly badge: string;
  readonly iconName: "radio" | "camera" | "receipt" | "shield";
}

export interface ScrollRevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly effect?: "rise" | "skew-left" | "skew-right" | "scale";
}
