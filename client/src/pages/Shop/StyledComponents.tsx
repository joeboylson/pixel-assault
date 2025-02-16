import styled from "styled-components";
import { MinimalButtonCSS } from "../../components/MinimalButton";
import { WithBackgroundColorTransitionCSS } from "../../utils/transition";
import { SkeletonBlock, SkeletonTextLine } from "../../components/Skeleton";

export const StyledShop = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  padding: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 72px;
  }
`;

export const StyledShopItem = styled.div`
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
