import Image from "next/image";
import { BRAND_MARK_ALT, BRAND_MARK_SRC, BRAND_NAME } from "../../constants/brand";

type BrandMarkSize = "sm" | "md";

interface BrandMarkProps {
  priority?: boolean;
  size?: BrandMarkSize;
  /** White wordmark for use on `deep`/`brand` surfaces. */
  inverted?: boolean;
}

const MARK_PIXELS: Record<BrandMarkSize, number> = { sm: 36, md: 44 };

const WORDMARK_CLASS: Record<BrandMarkSize, string> = {
  sm: "text-lg",
  md: "text-xl sm:text-2xl",
};

export function BrandMark({ priority = false, size = "md", inverted = false }: BrandMarkProps) {
  const pixels = MARK_PIXELS[size];
  const wordmarkColor = inverted ? "text-on-brand" : "text-brand";

  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        alt={BRAND_MARK_ALT}
        className="shrink-0 rounded-full"
        height={pixels}
        priority={priority}
        src={BRAND_MARK_SRC}
        width={pixels}
      />
      <span className={`whitespace-nowrap font-black leading-none tracking-tight ${wordmarkColor} ${WORDMARK_CLASS[size]}`}>
        {BRAND_NAME}
      </span>
    </span>
  );
}
