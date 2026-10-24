import type { ServiceSlug } from "../types/service";
import type {
  CulturalWatermarkArt,
  CulturalWatermarkId,
  CulturalWatermarkPattern,
} from "../types/cultural-watermark";

export const CULTURAL_WATERMARK_PATTERNS: Record<
  CulturalWatermarkId,
  CulturalWatermarkPattern
> = {
  "diamond-weave": {
    color: "brand",
    frame: "diamond",
    paths: ["M32 2 62 32 32 62 2 32 32 2ZM32 14 50 32 32 50 14 32 32 14Z", "M2 2h60v60H2zM32 2v60M2 32h60"],
  },
  sunburst: {
    color: "accent",
    frame: "circle",
    paths: ["M32 1v14m0 34v14M1 32h14m34 0h14M10 10l10 10m24 24 10 10m0-44L44 20M20 44 10 54", "M32 11v8m0 26v8M11 32h8m26 0h8M18 18l6 6m16 16 6 6m0-28-6 6m-16 16-6 6", "M32 24a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"],
  },
  "chevron-braid": {
    color: "brand",
    frame: "diamond",
    paths: ["M0 8 16 24 32 8 48 24 64 8M0 24l16 16 16-16 16 16 16-16M0 40l16 16 16-16 16 16 16-16", "M8 0 24 16 8 32 24 48 8 64M24 0l16 16-16 16 16 16-16 16M40 0l16 16-16 16 16 16-16 16"],
  },
  "stepped-meander": {
    color: "accent",
    frame: "square",
    paths: ["M8 8h48v12H20v24h24V32h12v24H8z", "M0 0h64v4H4v56h56v-8h4v12H0z", "M28 24h8v8h-8z"],
  },
  "basket-weave": {
    color: "brand",
    frame: "circle",
    paths: ["M8 0v64m16-64v64m16-64v64m16-64v64", "M0 8h64M0 24h64M0 40h64M0 56h64", "M8 8h8v8H8zm32 0h8v8h-8zM24 24h8v8h-8zm32 0h8v8h-8zM8 40h8v8H8zm32 0h8v8h-8zM24 56h8v8h-8z"],
  },
  "concentric-rings": {
    color: "accent",
    frame: "circle",
    paths: ["M32 2a30 30 0 1 0 0 60 30 30 0 0 0 0-60Zm0 10a20 20 0 1 0 0 40 20 20 0 0 0 0-40Zm0 10a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z", "M32 0v12m0 40v12M0 32h12m40 0h12M9 9l9 9m28 28 9 9m0-46-9 9M18 46l-9 9"],
  },
  "triangle-textile": {
    color: "brand",
    frame: "diamond",
    paths: ["M32 4 60 56H4L32 4Zm0 18L20 46h24L32 22Z", "M0 0h64v64H0zM0 32h64M32 0v64", "M0 0l32 32L64 0M0 64l32-32 32 32"],
  },
  beadwork: {
    color: "accent",
    frame: "circle",
    paths: ["M12 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm20 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm20 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 32a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm20 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm20 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 52a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm20 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm20 0a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z", "M2 2h60v60H2zM22 2v60m20-60v60M2 22h60M2 42h60"],
  },
  "flowing-waves": {
    color: "brand",
    frame: "square",
    paths: ["M0 12c8 0 8-8 16-8s8 8 16 8 8-8 16-8 8 8 16 8M0 28c8 0 8-8 16-8s8 8 16 8 8-8 16-8 8 8 16 8M0 44c8 0 8-8 16-8s8 8 16 8 8-8 16-8 8 8 16 8M0 60c8 0 8-8 16-8s8 8 16 8 8-8 16-8 8 8 16 8", "M8 0v64m24-64v64m24-64v64"],
  },
  rosette: {
    color: "accent",
    frame: "diamond",
    paths: ["M32 4 39 21 56 12 47 29 64 32 47 39 56 56 39 47 32 64 25 47 8 56 17 39 0 32 17 25 8 8 25 17 32 4Z", "M32 20 44 32 32 44 20 32 32 20Zm0 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z", "M0 0h64v64H0z"],
  },
};

export const CULTURAL_WATERMARK_POSITIONS = {
  "top-left": "-left-28 -top-28 w-56 sm:-left-24 sm:-top-24 sm:w-80",
  "bottom-right": "-right-32 -bottom-32 w-64 sm:-right-36 sm:-bottom-36 sm:w-96",
  "top-right": "-right-28 -top-28 w-56 sm:-right-24 sm:-top-24 sm:w-80",
  "bottom-left": "-left-32 -bottom-32 w-64 sm:-left-36 sm:-bottom-36 sm:w-96",
} as const;

export const HOME_WATERMARK_ART: readonly CulturalWatermarkArt[] = [
  { id: "diamond-weave", placement: "top-left" },
  { id: "sunburst", placement: "bottom-right" },
];

export const HOW_IT_WORKS_WATERMARK_ART: readonly CulturalWatermarkArt[] = [
  { id: "chevron-braid", placement: "top-left" },
  { id: "stepped-meander", placement: "bottom-right" },
];

export const SERVICE_WATERMARK_ART: Record<
  ServiceSlug,
  readonly CulturalWatermarkArt[]
> = {
  concierge: [
    { id: "diamond-weave", placement: "top-left" },
    { id: "sunburst", placement: "bottom-right" },
  ],
  move: [
    { id: "chevron-braid", placement: "top-left" },
    { id: "stepped-meander", placement: "bottom-right" },
  ],
  stay: [
    { id: "basket-weave", placement: "top-left" },
    { id: "concentric-rings", placement: "bottom-right" },
  ],
  "home-care": [
    { id: "triangle-textile", placement: "top-left" },
    { id: "beadwork", placement: "bottom-right" },
  ],
  shop: [
    { id: "flowing-waves", placement: "top-left" },
    { id: "rosette", placement: "bottom-right" },
  ],
};
