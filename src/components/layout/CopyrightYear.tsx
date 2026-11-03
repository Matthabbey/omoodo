"use client";

import { useSyncExternalStore } from "react";

/**
 * Renders the current year on the client only. The server snapshot is null so
 * static prerendering under cache components never reads the clock; the
 * client snapshot fills the year in during hydration.
 */
const subscribe = () => () => {};
const getClientYear = (): number | null => new Date().getFullYear();
const getServerYear = (): number | null => null;

export function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getClientYear, getServerYear);
  return <>{year ?? ""}</>;
}
