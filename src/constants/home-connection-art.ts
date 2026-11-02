import type { HomeConnectionArt } from "../types/home";

/** Routes radiating from a home point (bottom-left) to three distant points. */
export const HOME_CONNECTION_ART: HomeConnectionArt = {
  viewBox: "0 0 420 280",
  origin: { x: 70, y: 220 },
  routes: [
    { id: "north", x: 190, y: 40, path: "M70 220 C 90 120, 130 70, 190 40" },
    { id: "east", x: 350, y: 90, path: "M70 220 C 150 190, 250 120, 350 90" },
    { id: "south-east", x: 380, y: 230, path: "M70 220 C 170 260, 280 250, 380 230" },
  ],
};
