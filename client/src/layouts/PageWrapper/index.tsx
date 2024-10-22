import styled from "styled-components";
import { WithChildren } from "../../types";
import { LayoutValues } from "../../enums/layout";
import { getTheme } from "../../theme";
import Header from "../Header";

const { HEADER_HEIGHT, FOOTER_HEIGHT } = LayoutValues;
const theme = getTheme();

const StyledPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${HEADER_HEIGHT}px 1fr ${FOOTER_HEIGHT}px;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  * {
    color: ${theme.TEXT_COLOR};
  }
`;

const Content = styled.div``;

const Footer = styled.footer`
  padding: 0 24px;
  display: grid;
  align-content: center;
`;

export default function PageWrapper({ children }: WithChildren) {
  const _theme = getTheme();

  return (
    <StyledPageWrapper
      data-id="PageWrapper"
      style={{ backgroundColor: _theme.BACKGROUND_COLOR }}
    >
      <Header />

      <Content data-id="PageWrapper.Content">{children}</Content>

      <Footer
        data-id="Footer"
        style={{ backgroundColor: _theme.BACKGROUND_COLOR }}
      >
        <p>This is a footer element</p>
      </Footer>
    </StyledPageWrapper>
  );
}
