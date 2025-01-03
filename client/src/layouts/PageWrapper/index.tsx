import styled from "styled-components";
import { WithChildren } from "../../types";
import { LayoutValues } from "../../enums/layout";
import { WithBackgroundColorTransitionCSS } from "../../utils/transition";
import Header from "../Header";
import Footer from "../Footer";

const { HEADER_HEIGHT, FOOTER_HEIGHT } = LayoutValues;

const StyledPageWrapper = styled.div`
  ${WithBackgroundColorTransitionCSS}

  display: grid;
  grid-template-columns: 1fr;
  width: 100vw;
  overflow-x: hidden;
  background-color: var(--themeBackground);

  * {
    color: var(--themeText);
  }
`;

const Content = styled.div``;

export default function PageWrapper({ children }: WithChildren) {
  return (
    <StyledPageWrapper data-id="PageWrapper">
      <Header />
      <Content data-id="PageWrapper.Content">{children}</Content>
      <Footer />
    </StyledPageWrapper>
  );
}
