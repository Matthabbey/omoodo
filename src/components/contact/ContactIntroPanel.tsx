import { Globe, MessageCircle, Receipt, type LucideIcon } from "lucide-react";
import { CONTACT_PAGE_COPY } from "../../constants/contact";
import type { ContactBulletIcon } from "../../types/contact";

const BULLET_ICONS: Readonly<Record<ContactBulletIcon, LucideIcon>> = {
  "message-circle": MessageCircle,
  globe: Globe,
  receipt: Receipt,
};

export function ContactIntroPanel() {
  return (
    <section className="rounded-[2rem] bg-deep p-8 text-on-brand shadow-xl shadow-deep/25 sm:p-10 lg:sticky lg:top-24">
      <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">{CONTACT_PAGE_COPY.headline}</h1>
      <p className="mt-6 max-w-md text-lg leading-8 text-white/85">{CONTACT_PAGE_COPY.intro}</p>
      <ul className="mt-8 space-y-3">
        {CONTACT_PAGE_COPY.bullets.map((bullet) => {
          const Icon = BULLET_ICONS[bullet.iconName];
          return (
            <li className="flex items-center gap-3 text-base font-medium" key={bullet.label}>
              <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-accent" />
              {bullet.label}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
