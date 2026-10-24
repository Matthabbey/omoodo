"use client";

import { useEffect, useRef, useState } from "react";
import type { ScrollRevealProps } from "../../types/home";

export function ScrollReveal({ children, className = "", effect = "rise" }: ScrollRevealProps) {
  const [position, setPosition] = useState<"above" | "visible" | "below">("below");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setPosition("visible");
          return;
        }
        setPosition(entry.boundingClientRect.top < 0 ? "above" : "below");
      },
      { rootMargin: "-8% 0px", threshold: 0.08 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${className} transition-all duration-700 ease-out ${
        position === "visible"
          ? "translate-x-0 translate-y-0 rotate-0 skew-y-0 scale-100 opacity-100"
          : hiddenTransform(effect, position)
      } motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:rotate-0 motion-reduce:skew-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none`}
      ref={sectionRef}
    >
      {children}
    </div>
  );
}

function hiddenTransform(
  effect: NonNullable<ScrollRevealProps["effect"]>,
  position: "above" | "below",
) {
  const vertical = position === "above" ? "-translate-y-10" : "translate-y-10";
  if (effect === "skew-left") return `${vertical} -translate-x-10 -rotate-2 skew-y-1 opacity-0`;
  if (effect === "skew-right") return `${vertical} translate-x-10 rotate-2 -skew-y-1 opacity-0`;
  if (effect === "scale") return `${vertical} scale-95 opacity-0`;
  return `${vertical} opacity-0`;
}
