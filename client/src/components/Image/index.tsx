import urlBuilder from "@sanity/image-url";
import { getImageDimensions, SanityImageSource } from "@sanity/asset-utils";
import { sanityClient } from "../../utils/sanity";
import { useMemo } from "react";

interface _props {
  value: SanityImageSource;
}

export default function Image({ value }: _props) {
  const { width, height } = getImageDimensions(value);

  const src = useMemo(() => {
    return urlBuilder(sanityClient)
      .image(value)
      .width(800)
      .fit("max")
      .auto("format")
      .url();
  }, [value]);

  return (
    <img
      src={src}
      alt={src}
      loading="lazy"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
}
