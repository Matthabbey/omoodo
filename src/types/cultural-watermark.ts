export type CulturalWatermarkId =
  | "diamond-weave"
  | "sunburst"
  | "chevron-braid"
  | "stepped-meander"
  | "basket-weave"
  | "concentric-rings"
  | "triangle-textile"
  | "beadwork"
  | "flowing-waves"
  | "rosette";

export type CulturalWatermarkPlacement =
  | "top-left"
  | "bottom-right"
  | "top-right"
  | "bottom-left"
  | "rail-left-top"
  | "rail-left-center"
  | "rail-left-bottom"
  | "rail-right-top"
  | "rail-right-center"
  | "rail-right-bottom"
  | "rail-left-fill"
  | "rail-right-fill"
  | "content-fill";

export type CulturalWatermarkColor =
  | "brand"
  | "accent"
  | "african-green"
  | "african-gold"
  | "african-red";

export interface CulturalWatermarkArt {
  readonly id: CulturalWatermarkId;
  readonly placement: CulturalWatermarkPlacement;
  readonly color?: CulturalWatermarkColor;
}

export interface CulturalWatermarkPattern {
  readonly color: "brand" | "accent";
  readonly frame: "circle" | "diamond" | "square";
  readonly paths: readonly string[];
}
