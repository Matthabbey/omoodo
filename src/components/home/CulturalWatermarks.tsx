import { useId } from "react";
import {
  CULTURAL_WATERMARK_COLOR_CLASSES,
  CULTURAL_WATERMARK_PATTERNS,
  CULTURAL_WATERMARK_POSITIONS,
} from "../../constants/cultural-watermarks";
import type { CulturalWatermarkArt } from "../../types/cultural-watermark";

interface CulturalWatermarksProps {
  readonly designs: readonly CulturalWatermarkArt[];
  readonly visibility?: "subtle" | "prominent";
}

export function CulturalWatermarks({
  designs,
  visibility = "subtle",
}: CulturalWatermarksProps) {
  const instanceId = useId().replaceAll(":", "");

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {designs.map((design, index) => {
        const pattern = CULTURAL_WATERMARK_PATTERNS[design.id];
        const patternId = `omoodo-${instanceId}-${index}`;
        const colorClass = design.color
          ? CULTURAL_WATERMARK_COLOR_CLASSES[design.color]
          : CULTURAL_WATERMARK_COLOR_CLASSES[pattern.color];
        const isFilledRail = design.placement.endsWith("-fill");
        const isContentFill = design.placement === "content-fill";
        const opacityClass = isContentFill
          ? "opacity-30"
          : visibility === "prominent"
            ? "opacity-[0.08]"
            : "opacity-[0.08] sm:opacity-[0.12]";
        const fadeClass =
          design.placement === "rail-left-fill"
            ? "watermark-fade-left"
            : design.placement === "rail-right-fill"
              ? "watermark-fade-right"
              : "";
        const maskId = `${patternId}-edge-fade`;
        const gradientId = `${patternId}-edge-gradient`;
        const strokeWidth = 1.5;
        const frameClass =
          pattern.frame === "diamond"
            ? "M160 12 308 160 160 308 12 160Z"
            : "M160 42 278 160 160 278 42 160Z";

        return (
          <svg
            className={`absolute ${CULTURAL_WATERMARK_POSITIONS[design.placement]} ${colorClass} ${opacityClass} ${fadeClass}`}
            data-watermark={design.id}
            fill="none"
            key={`${design.id}-${design.placement}`}
            preserveAspectRatio={isFilledRail && !isContentFill ? "none" : undefined}
            viewBox={isContentFill ? undefined : isFilledRail ? "0 0 320 640" : "0 0 320 320"}
          >
            <defs>
              <pattern height="64" id={patternId} patternUnits="userSpaceOnUse" width="64">
                {pattern.paths.map((path) => (
                  <path d={path} key={path} stroke="currentColor" strokeWidth={strokeWidth} />
                ))}
              </pattern>
              {isContentFill && (
                <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="8%" stopColor="white" />
                  <stop offset="20%" stopColor="black" />
                  <stop offset="80%" stopColor="black" />
                  <stop offset="92%" stopColor="white" />
                  <stop offset="100%" stopColor="white" />
                </linearGradient>
              )}
              {isContentFill && (
                <mask id={maskId} maskContentUnits="objectBoundingBox" maskUnits="objectBoundingBox">
                  <rect fill={`url(#${gradientId})`} height="1" width="1" />
                </mask>
              )}
            </defs>
            {isFilledRail ? (
              <>
                <rect
                  height={isContentFill ? "100%" : "640"}
                  fill={`url(#${patternId})`}
                  mask={isContentFill ? `url(#${maskId})` : undefined}
                  width={isContentFill ? "100%" : "320"}
                />
                {!isContentFill && (
                  <path
                    d={design.placement === "rail-left-fill" ? "M314 0v640" : "M6 0v640"}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                  />
                )}
              </>
            ) : pattern.frame === "circle" ? (
              <>
                <circle cx="160" cy="160" r="150" stroke="currentColor" strokeWidth={strokeWidth} />
                <circle cx="160" cy="160" r="134" stroke="currentColor" strokeDasharray="3 8" />
                <circle cx="160" cy="160" fill={`url(#${patternId})`} r="116" />
              </>
            ) : pattern.frame === "diamond" ? (
              <>
                <path d={frameClass} stroke="currentColor" strokeWidth={strokeWidth} />
                <path d="M160 34 286 160 160 286 34 160Z" stroke="currentColor" strokeDasharray="3 8" />
                <path d="M160 54 266 160 160 266 54 160Z" fill={`url(#${patternId})`} />
              </>
            ) : (
              <>
                <rect height="296" rx="42" stroke="currentColor" strokeWidth={strokeWidth} width="296" x="12" y="12" />
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
