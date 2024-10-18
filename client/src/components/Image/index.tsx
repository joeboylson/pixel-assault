import { getImageDimensions, SanityImageSource } from "@sanity/asset-utils";
import { makeImageUrl } from "../../utils/sanity";

interface _props {
  value: SanityImageSource;
}

export default function Image({ value }: _props) {
  const { width, height } = getImageDimensions(value);

  const src = makeImageUrl(value);

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
