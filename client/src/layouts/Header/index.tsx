import styled from "styled-components";
import { Pages } from "../../enums";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "use-shopping-cart";
import CheckoutButton from "../../components/CheckoutButton";
import { getTheme } from "../../theme";
import ThemeButton from "../../components/ThemeButton";
import { ColorThemes } from "../../enums/theme";
import { StyledBadge } from "../../components/Badge";

const StyledHeader = styled.header`
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 12px;
  align-items: center;

  > a {
    text-transform: capitalize;
  }
`;

export const CheckoutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 12px;
  align-items: center;
`;

export const ThemeButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 12px;
  align-items: center;
`;

export default function Header() {
  const cart = useShoppingCart();
  const { ACCENT_1, BACKGROUND_COLOR, TEXT_COLOR } = getTheme();

  const activeStyling = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? ACCENT_1 : TEXT_COLOR,
    };
  };

  return (
    <StyledHeader
      data-id="StyledHeader"
      style={{
        backgroundColor: BACKGROUND_COLOR,
        borderBottom: `1px solid ${ACCENT_1}`,
      }}
    >
      <NavWrapper>
        <NavLink style={activeStyling} to={Pages.HOME}>
          {Pages.HOME.replaceAll("/", "")}
        </NavLink>
        <NavLink style={activeStyling} to={Pages.SHOP}>
          {Pages.SHOP.replaceAll("/", "")}
        </NavLink>
        <NavLink style={activeStyling} to={Pages.WIKI}>
          {Pages.WIKI.replaceAll("/", "")}
        </NavLink>
      </NavWrapper>

      <ThemeButtonsWrapper>
        <ThemeButton theme={ColorThemes.DEFAULT} />
        <ThemeButton theme={ColorThemes.PLAINS} />
        <ThemeButton theme={ColorThemes.MOUNTAIN} />
        <ThemeButton theme={ColorThemes.SILICON} />
        <ThemeButton theme={ColorThemes.MERCENARY} />
      </ThemeButtonsWrapper>

      <CheckoutWrapper>
        <StyledBadge badgeContent={cart.cartCount} color="success">
          <CheckoutButton />
        </StyledBadge>
      </CheckoutWrapper>
    </StyledHeader>
  );
}
