import { CheckCircle2, ShieldCheck } from "lucide-react";
import { HERO_PROOF_CARD, HERO_PROOF_CHIP } from "../../constants/hero-home";

interface HeroProofCardProps {
  readonly className?: string;
}

export function HeroProofCard({ className = "" }: HeroProofCardProps) {
  return (
    <div className={`w-[min(20rem,100%)] ${className}`}>
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-bold text-brand shadow-md">
        <ShieldCheck aria-hidden="true" className="h-4 w-4 text-accent-deep" />
        {HERO_PROOF_CHIP}
      </div>
      <div className="rounded-2xl border border-border bg-surface p-4 text-foreground shadow-lg shadow-deep/30">
        <span className="sr-only">Example job update: </span>
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-brand">
            <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-bold">{HERO_PROOF_CARD.title}</p>
            <p className="mt-0.5 text-xs text-muted">
              {HERO_PROOF_CARD.location} · {HERO_PROOF_CARD.time}
            </p>
          </div>
        </div>
        <p className="mt-3 inline-flex items-center rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-deep">
          {HERO_PROOF_CARD.meta}
        </p>
      </div>
    </div>
  );
}
