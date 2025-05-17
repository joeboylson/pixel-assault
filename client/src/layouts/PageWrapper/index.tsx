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
  background-color: var(--themeBackground);

  * {
    color: var(--themeText);
  }
`;

const Content = styled.div<{ nopadding: boolean }>`
  padding-top: ${(props) => (props.nopadding ? 0 : 50)}px;
`;

type _props = WithChildren & {
  nopadding?: boolean;
};

export default function PageWrapper({ children, nopadding = false }: _props) {
  return (
    <StyledPageWrapper data-id="PageWrapper">
      <Header />

      <Content data-id="PageWrapper.Content" nopadding={nopadding}>
        {children}
        <Footer />
      </Content>
    </StyledPageWrapper>
  );
}
