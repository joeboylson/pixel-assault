import styled from "styled-components";

// #region index.tsx
export const CheckoutItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  align-content: start;
`;
// #endregion

// #region CheckoutItem.tsx
export const StyledCheckoutItem = styled.div`
  display: grid;
  grid-template-columns: 72px 1fr 72px;
  align-items: center;
  gap: 12px;
`;
// #endregion
