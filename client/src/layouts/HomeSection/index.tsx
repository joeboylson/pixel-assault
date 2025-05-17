import styled from "styled-components";
import { WithChildren } from "../../types";

interface StyledHomeSectionProps {
  color: string;
}

const StyledHomeSection = styled.div<StyledHomeSectionProps>`
  background-color: ${(props) => props.color};

  * {
    color: #aae1f1;
  }
`;

const HomeSectionImage = styled.img`
  display: block;
  min-width: 800px;
  width: 100%;
  text-align: center;

  @media (max-width: 800px) {
    transform: translateX(calc((100vw - 800px) / 2));
  }
`;

const StyledHomeSectionInner = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 64px 24px;
`;

type _props = WithChildren & {
  color: string;
  image?: string;
};

export function HomeSection({ color, image, children }: _props) {
  return (
    <StyledHomeSection color={color}>
      <StyledHomeSectionInner>{children}</StyledHomeSectionInner>
      <HomeSectionImage src={image} alt="" />
    </StyledHomeSection>
  );
}
