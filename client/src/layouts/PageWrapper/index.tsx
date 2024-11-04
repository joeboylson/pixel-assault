import styled from "styled-components";
import { WithChildren } from "../../types";
import { LayoutValues } from "../../enums/layout";
import Header from "../Header";
import { WithBackgroundColorTransitionCSS } from "../../utils/transition";

const { HEADER_HEIGHT, FOOTER_HEIGHT } = LayoutValues;

const StyledPageWrapper = styled.div`
  ${WithBackgroundColorTransitionCSS}

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${HEADER_HEIGHT}px 1fr ${FOOTER_HEIGHT}px;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: var(--themeBackground);

  * {
    color: var(--themeText);
  }
`;

const Content = styled.div``;

const Footer = styled.footer`
  ${WithBackgroundColorTransitionCSS}

  padding: 0 24px;
  display: grid;
  align-content: center;
  background-color: var(--themeBackground);
`;

export default function PageWrapper({ children }: WithChildren) {
  return (
    <StyledPageWrapper data-id="PageWrapper">
      <Header />

      <Content data-id="PageWrapper.Content">{children}</Content>

      <Footer data-id="Footer">
        <p>This is a footer element</p>
      </Footer>
    </StyledPageWrapper>
  );
}
