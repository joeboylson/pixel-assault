import styled from "styled-components";
import { BlockContent } from "../../types/sanity.types";
import { PortableText } from "@portabletext/react";
import Image from "../Image";
import { SpacedOneColumnCSS } from "../SpacedOneColumn";

const StyledBlock = styled.div`
  ${SpacedOneColumnCSS}
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px;
  border-radius: 8px;
  gap: 8px;
  border: 1px solid white;

  img {
    max-width: 400px;
    margin: auto;
  }

  p,
  p * {
    font-soze: 18px;
    line-height: calc(18px * 1.5);
    color: #ddd;
  }
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
            image: ({ value }) => <Image value={value} />,
          },
        }}
      />
    </StyledBlock>
  );
}
