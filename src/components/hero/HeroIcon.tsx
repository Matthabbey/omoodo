import {
  Briefcase,
  Building2,
  Camera,
  Car,
  Check,
  Globe,
  House,
  MapPin,
  MessageSquare,
  Receipt,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  User,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { HeroIconName } from "../../types/hero-home";

const HERO_ICONS: Record<HeroIconName, LucideIcon> = {
  "shield-check": ShieldCheck,
  car: Car,
  building: Building2,
  sparkles: Sparkles,
  "shopping-bag": ShoppingBag,
  "map-pin": MapPin,
  camera: Camera,
  receipt: Receipt,
  check: Check,
  "message-square": MessageSquare,
  "user-check": UserCheck,
  user: User,
  users: Users,
  globe: Globe,
  briefcase: Briefcase,
  house: House,
};

interface HeroIconProps {
  readonly name: HeroIconName;
  readonly className?: string;
}

export function HeroIcon({ name, className = "h-4 w-4" }: HeroIconProps) {
  const Icon = HERO_ICONS[name];
  return <Icon aria-hidden="true" className={className} />;
}
