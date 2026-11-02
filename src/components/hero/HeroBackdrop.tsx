import Image from "next/image";
import { HERO_IMAGE } from "../../constants/hero-home";

/**
 * Hero photograph, shown untinted. Stacks above the copy as a cropped band on
 * small screens and fills the section behind the copy panel on large screens.
 */
export function HeroBackdrop() {
  return (
    <div className="relative h-[38svh] min-h-[15rem] w-full lg:absolute lg:inset-0 lg:-z-10 lg:h-auto lg:min-h-0">
      <Image
        alt={HERO_IMAGE.alt}
        className="object-cover object-[45%_40%] lg:object-center"
        fill
        priority
        sizes="100vw"
        src={HERO_IMAGE.src}
      />
    </div>
  );
}
