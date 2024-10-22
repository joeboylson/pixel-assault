import styled from "styled-components";
import { Pages } from "../../enums";
import { WithChildren } from "../../types";
import { Link } from "react-router-dom";
import { LayoutValues } from "../../enums/layout";
import { useShoppingCart } from "use-shopping-cart";
import CheckoutButton from "../../components/CheckoutButton";
import { getTheme } from "../../theme";

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

const Header = styled.header`
  background-color: ${theme.BACKGROUND_COLOR_DARKER};
  padding: 0 24px;
  display: flex;
  align-items: center;

  > a {
    display: grid;
    place-items: center;
    padding-right: 12px;
    text-transform: capitalize;
  }
`;

const Content = styled.div``;

const Footer = styled.footer`
  background-color: ${theme.BACKGROUND_COLOR_DARKER};
  padding: 0 24px;
  display: grid;
  content-align: center;
`;

export default function PageWrapper({ children }: WithChildren) {
  const cart = useShoppingCart();

  return (
    <StyledPageWrapper
      data-id="PageWrapper"
      style={{ backgroundColor: getTheme().BACKGROUND_COLOR }}
    >
      <Header>
        <Link to={Pages.HOME}>{Pages.HOME.replaceAll("/", "")}</Link>
        <Link to={Pages.SHOP}>{Pages.SHOP.replaceAll("/", "")}</Link>
        <Link to={Pages.WIKI}>{Pages.WIKI.replaceAll("/", "")}</Link>
        <p>Count: {cart.cartCount}</p>
        <CheckoutButton />
      </Header>

      <Content data-id="PageWrapper.Content">{children}</Content>

      <Footer>
        <p>This is a footer element</p>
      </Footer>
    </StyledPageWrapper>
  );
}
