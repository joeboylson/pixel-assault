import styled from "styled-components";
import { WithChildren } from "../../types";
import { WithBackgroundColorTransitionCSS } from "../../utils/transition";
import Header from "../Header";
import Footer from "../Footer";
import { LayoutValues } from "../../enums";

const { HEADER_HEIGHT } = LayoutValues;

const StyledPageWrapper = styled.div`
  ${WithBackgroundColorTransitionCSS}

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${HEADER_HEIGHT}px calc(100vh - ${HEADER_HEIGHT}px);
  width: 100vw;
  min-height: 100vh;
  background-color: var(--themeBackground);

  * {
    color: var(--themeText);
  }
`;

const Content = styled.div`
  overflow-y: auto;
  padding-top: 50px;
`;

export default function PageWrapper({ children }: WithChildren) {
  return (
    <StyledPageWrapper data-id="PageWrapper">
      <Header />

      <Content data-id="PageWrapper.Content">
        {children}
        <Footer />
      </Content>
    </StyledPageWrapper>
  );
}
