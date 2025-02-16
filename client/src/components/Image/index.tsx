import { getImageDimensions } from "@sanity/asset-utils";
import { makeImageUrl } from "../../utils/sanity";
import { ImageValue } from "../../types/image";

interface _props {
  value: ImageValue;
}

export default function Image({ value }: _props) {
  if (!value.asset) {
    return <span />;
  }

  const { width, height } = getImageDimensions(value.asset);
  const src = makeImageUrl(value.asset);

  return (
    <>
      <code>
        (Image Created By:{" "}
        {value.relatedAttribution?.name ?? "(No Attribution)"})
      </code>
      <img
        src={src}
        alt={src}
        loading="lazy"
        style={{
          aspectRatio: width / height,
        }}
      />
    </>
  );

  return <p>{JSON.stringify(value)}</p>;
}
