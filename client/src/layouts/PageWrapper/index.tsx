import styled from "styled-components";
import { WithChildren } from "../../types";
import { WithBackgroundColorTransitionCSS } from "../../utils/transition";
import Header from "../Header";
import Footer from "../Footer";

const StyledPageWrapper = styled.div`
  ${WithBackgroundColorTransitionCSS}

  display: grid;
  grid-template-columns: 1fr;
  width: 100vw;
  min-height: 100vh;
  background-color: var(--themeBackground);

  * {
    color: var(--themeText);
  }
`;

const Content = styled.div``;

type _props = WithChildren & {
  hideHeaderAndFooter?: boolean;
};

export default function PageWrapper({ children, hideHeaderAndFooter }: _props) {
  return (
    <StyledPageWrapper data-id="PageWrapper">
      {!hideHeaderAndFooter && <Header />}
      <Content data-id="PageWrapper.Content">{children}</Content>
      {!hideHeaderAndFooter && <Footer />}
    </StyledPageWrapper>
  );
}
