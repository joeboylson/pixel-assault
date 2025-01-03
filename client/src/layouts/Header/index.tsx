import styled from "styled-components";
import { LayoutValues, Pages } from "../../enums";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";
import CheckoutButton from "../../components/CheckoutButton";
import { StyledBadge } from "../../components/Badge";
import { WithColorTransitionCSS } from "../../utils/transition";

const StyledHeader = styled.header`
  height: ${LayoutValues.HEADER_HEIGHT}px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 24px;
  align-items: center;

  > a {
    ${WithColorTransitionCSS}
    text-transform: capitalize;
    text-decoration: none;

    &.active {
      color: var(--themeAccent1);
    }
  }
`;

export const CheckoutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 12px;
  align-items: center;
`;

export default function Header() {
  const cart = useShoppingCart();

  return (
    <StyledHeader data-id="StyledHeader">
      <NavWrapper>
        <NavLink to={Pages.HOME}>{Pages.HOME.replaceAll("/", "")}</NavLink>
        <NavLink to={Pages.SHOP}>{Pages.SHOP.replaceAll("/", "")}</NavLink>
        <NavLink to={Pages.WIKI}>{Pages.WIKI.replaceAll("/", "")}</NavLink>
        <NavLink to={Pages.HEALTH_TRACKER}>
          {Pages.HEALTH_TRACKER.replaceAll("/", "").replaceAll("-", " ")}
        </NavLink>
      </NavWrapper>

      <CheckoutWrapper>
        <StyledBadge badgeContent={cart.cartCount} color="success">
          <CheckoutButton />
        </StyledBadge>
      </CheckoutWrapper>
    </StyledHeader>
  );
}
