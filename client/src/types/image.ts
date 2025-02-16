import { SanityImageSource } from "@sanity/asset-utils";
import { Attribution } from "./sanity.types";

export type ImageValue = {
  asset?: SanityImageSource;
  relatedAttribution?: Attribution;
};
