import styled from "styled-components";
import { WithManyChildren } from "../../types";

type _direction = "left" | "right";

function gtcFromDirection(direction: _direction) {
  if (direction === "left") return "300px 1fr";
  if (direction === "right") return "1fr 300px";
  return "1fr 1fr";
}

const StyledOffsetTwoColumn = styled.div<{ direction: _direction }>`
  display: grid;
  grid-template-columns: ${({ direction }) => gtcFromDirection(direction)};
  gap: 24px;
  align-content: start;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

type _props = WithManyChildren & {
  direction: _direction;
};

export default function OffsetTwoColumn({ children, direction }: _props) {
  return (
    <StyledOffsetTwoColumn direction={direction}>
      {children}
    </StyledOffsetTwoColumn>
  );
}
