import styled from "styled-components";
import { MinimalButtonCSS } from "../../components/MinimalButton";
import { WithBackgroundColorTransitionCSS } from "../../utils/transition";
import { SkeletonBlock, SkeletonTextLine } from "../../components/Skeleton";

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
`;

export function SkeletonProduct() {
  return (
    <StyledShopItem>
      <SkeletonBlock width="80%" height="39px" />
      <SkeletonTextLine length={24} />
      <SkeletonTextLine length={6} />
      <SkeletonBlock width="100%" height="250px" />
      <SkeletonTextLine length={12} />
    </StyledShopItem>
  );
}

export function SkeletonProductsGrid() {
  return (
    <>
      <SkeletonProduct />
      <SkeletonProduct />
      <SkeletonProduct />
      <SkeletonProduct />
      <SkeletonProduct />
      <SkeletonProduct />
    </>
  );
}
