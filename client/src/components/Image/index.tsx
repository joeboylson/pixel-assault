import { getImageDimensions } from "@sanity/asset-utils";
import { makeImageUrl } from "../../utils/sanity";
import { ImageValue } from "../../types/image";
import styled from "styled-components";

export const StyledImage = styled.div`
  display: block;
  position: relative;
`;

export const Attribution = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 100px;
  padding: 2px 4px;
  font-size: 12px !important;
  line-height: 12px !important;
`;

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
    <StyledImage>
      <Attribution>
        (Image Created By:{" "}
        {value.relatedAttribution?.name ?? "(No Attribution)"})
      </Attribution>
      <img
        src={src}
        alt={src}
        loading="lazy"
        style={{
          aspectRatio: width / height,
        }}
      />
    </StyledImage>
  );
}
