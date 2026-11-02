import type { NavLink } from "../types/navigation";

export const ABOUT_SECTION_ID = "about";

export const NAV_LEADING_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: `/#${ABOUT_SECTION_ID}` },
];

export const NAV_TRAILING_LINKS: NavLink[] = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export const PRIMARY_NAV_LINKS: NavLink[] = [...NAV_LEADING_LINKS, ...NAV_TRAILING_LINKS];
