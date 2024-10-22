import styled from "styled-components";
import { WithChildren } from "../../types";

const StyledPageMaxWithContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 72px 0;
`;

export default function PageMaxWithContainer({ children }: WithChildren) {
  return <StyledPageMaxWithContainer>{children}</StyledPageMaxWithContainer>;
}
