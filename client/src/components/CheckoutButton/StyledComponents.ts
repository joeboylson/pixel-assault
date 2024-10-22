import styled from "styled-components";
import { MinimalButtonCSS } from "../MinimalButton";

export const CheckoutModalBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
`;

export const CheckoutItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  align-content: start;
`;

export const StyledCheckoutItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 72px;
  align-items: center;
  gap: 12px;
`;

export const CheckoutItemTitle = styled.p`
  grid-column: span 3;
`;

export const StyledCheckoutItemContent = styled.div`
  display: grid;
  grid-template-columns: 42px 42px 1fr;
  gap: 12px;

  > button {
    display: grid;
    place-items: center;
  }
`;

export const PlusMinusButton = styled.button`
  ${MinimalButtonCSS}
  min-width: 48px;
  margin-right: 8px;
  padding: 4px 8px;
  background-color: white;
  color: black;
  border-radius: 8px;
  width: 100%;
`;
