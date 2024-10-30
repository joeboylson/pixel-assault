import styled from "styled-components";
import { WithManyChildren } from "../../types";

const StyledFixedLeftContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 24px;
  align-content: start;
`;

export default function FixedLeftContainer({ children }: WithManyChildren) {
  return <StyledFixedLeftContainer>{children}</StyledFixedLeftContainer>;
}
