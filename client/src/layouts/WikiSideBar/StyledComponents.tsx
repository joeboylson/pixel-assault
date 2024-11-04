import styled from "styled-components";
import { SkeletonBlock, SkeletonTextLine } from "../../components/Skeleton";

export const SpacedSkeletonWikiSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;

export function SkeletonWikiSection() {
  return (
    <SpacedSkeletonWikiSection>
      <SkeletonBlock width="80%" height="24px" />
      <SkeletonTextLine length={24} />
      <SkeletonTextLine length={24} />
      <SkeletonTextLine length={24} />
      <SkeletonTextLine length={24} />
      <SkeletonTextLine length={24} />
      <SkeletonTextLine length={24} />
      <SkeletonTextLine length={24} />
    </SpacedSkeletonWikiSection>
  );
}

export function SkeletonWikiSideBar() {
  return (
    <>
      <SkeletonWikiSection />
      <SkeletonWikiSection />
      <SkeletonWikiSection />
    </>
  );
}
