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
  | "bottom-left";

export interface CulturalWatermarkArt {
  readonly id: CulturalWatermarkId;
  readonly placement: CulturalWatermarkPlacement;
}

export interface CulturalWatermarkPattern {
  readonly color: "brand" | "accent";
  readonly frame: "circle" | "diamond" | "square";
  readonly paths: readonly string[];
}
