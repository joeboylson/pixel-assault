import styled from "styled-components";
import { Pages } from "../../enums";
import { WithChildren } from "../../types";
import { Link } from "react-router-dom";
import { LayoutValues } from "../../enums/layout";

const { HEADER_HEIGHT, FOOTER_HEIGHT } = LayoutValues;

const StyledPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${HEADER_HEIGHT}px 1fr ${FOOTER_HEIGHT}px;
  width: 100vw !important;
  height: 100vh;
`;

const Header = styled.header`
  background-color: ghostwhite;
  padding: 0 24px;
  display: flex;

  a {
    display: grid;
    place-items: center;
    padding-right: 12px;
    text-transform: capitalize;
  }
`;

const Content = styled.div``;

const Footer = styled.footer`
  background-color: ghostwhite;
  padding: 0 24px;
  display: grid;
  content-align: center;
`;

export default function PageWrapper({ children }: WithChildren) {
  return (
    <StyledPageWrapper data-id="PageWrapper">
      <Header>
        <Link to={Pages.HOME}>{Pages.HOME.replaceAll("/", "")}</Link>
        <Link to={Pages.SHOP}>{Pages.SHOP.replaceAll("/", "")}</Link>
        <Link to={Pages.WIKI}>{Pages.WIKI.replaceAll("/", "")}</Link>
      </Header>

      <Content data-id="PageWrapper.Content">{children}</Content>

      <Footer>
        <p>This is a footer element</p>
      </Footer>
    </StyledPageWrapper>
  );
}