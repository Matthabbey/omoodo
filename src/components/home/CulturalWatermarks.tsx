import { useId } from "react";
import {
  CULTURAL_WATERMARK_PATTERNS,
  CULTURAL_WATERMARK_POSITIONS,
} from "../../constants/cultural-watermarks";
import type { CulturalWatermarkArt } from "../../types/cultural-watermark";

interface CulturalWatermarksProps {
  readonly designs: readonly CulturalWatermarkArt[];
}

export function CulturalWatermarks({ designs }: CulturalWatermarksProps) {
  const instanceId = useId().replaceAll(":", "");

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {designs.map((design, index) => {
        const pattern = CULTURAL_WATERMARK_PATTERNS[design.id];
        const patternId = `omoodo-${instanceId}-${index}`;
        const colorClass = pattern.color === "brand" ? "text-brand-accent" : "text-accent";
        const frameClass =
          pattern.frame === "diamond"
            ? "M160 12 308 160 160 308 12 160Z"
            : "M160 42 278 160 160 278 42 160Z";

        return (
          <svg
            className={`absolute ${CULTURAL_WATERMARK_POSITIONS[design.placement]} ${colorClass} opacity-[0.05] sm:opacity-[0.08]`}
            data-watermark={design.id}
            fill="none"
            key={design.id}
            viewBox="0 0 320 320"
          >
            <defs>
              <pattern height="64" id={patternId} patternUnits="userSpaceOnUse" width="64">
                {pattern.paths.map((path) => (
                  <path d={path} key={path} stroke="currentColor" strokeWidth="1.5" />
                ))}
              </pattern>
            </defs>
            {pattern.frame === "circle" ? (
              <>
                <circle cx="160" cy="160" r="150" stroke="currentColor" strokeWidth="1" />
                <circle cx="160" cy="160" r="134" stroke="currentColor" strokeDasharray="3 8" />
                <circle cx="160" cy="160" fill={`url(#${patternId})`} r="116" />
              </>
            ) : pattern.frame === "diamond" ? (
              <>
                <path d={frameClass} stroke="currentColor" strokeWidth="1" />
                <path d="M160 34 286 160 160 286 34 160Z" stroke="currentColor" strokeDasharray="3 8" />
                <path d="M160 54 266 160 160 266 54 160Z" fill={`url(#${patternId})`} />
              </>
            ) : (
              <>
                <rect height="296" rx="42" stroke="currentColor" width="296" x="12" y="12" />
                <rect height="260" rx="32" stroke="currentColor" strokeDasharray="3 8" width="260" x="30" y="30" />
                <rect fill={`url(#${patternId})`} height="224" rx="24" width="224" x="48" y="48" />
              </>
            )}
          </svg>
        );
      })}
    </div>
  );
}
