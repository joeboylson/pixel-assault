import styled from "styled-components";

export const StyledShop = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 24px;
`;

export const StyledShopItem = styled.div`
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;

  border: 1px solid #ddd;
`;
