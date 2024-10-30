import styled from "styled-components";
import { BlockContent } from "../../types/sanity.types";
import { PortableText } from "@portabletext/react";
import Image from "../Image";
import { SpacedOneColumnCSS } from "../SpacedOneColumn";

const StyledBlock = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  padding: 24px;
  border-radius: 8px;
  max-width: 500px;

  ${SpacedOneColumnCSS}
`;

interface _props {
  content: BlockContent | undefined;
}

export default function Block({ content }: _props) {
  return (
    <StyledBlock>
      <PortableText
        value={content ?? []}
        components={{
          types: {
            image: Image,
          },
        }}
      />
    </StyledBlock>
  );
}
