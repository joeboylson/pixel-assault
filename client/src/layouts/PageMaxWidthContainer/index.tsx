import styled from "styled-components";
import { WithChildren } from "../../types";

const StyledPageMaxWithContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default function PageMaxWithContainer({ children }: WithChildren) {
  return <StyledPageMaxWithContainer>{children}</StyledPageMaxWithContainer>;
}
