import styled from "styled-components";
import { SkeletonBlock, SkeletonTextLine } from "../../components/Skeleton";
import { MinimalButtonCSS } from "../../components/MinimalButton";

export const StyledWikiSideBar = styled.div`
  position: sticky;
  top: 12px;
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  gap: 24px;
  padding: 24px;
  height: fit-content;
  max-height: calc(100vh - 50px - 48px - 48px);
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  transition-property: opacity, transform;
  transition-duration: 200ms;

  @media (max-width: 800px) {
    position: fixed;
    padding: 48px 24px;
    top: 0;
    left: 0;
    width: calc(100vw - 48px);
    height: 100vh;
    max-height: calc(100vh - 48px - 48px);
    background-color: var(--themeBackground);
    opacity: 0;
    pointer-events: none;
    transform: translateY(24px);

    &.wiki-nav-is-open {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }
  }
`;

export const WikiSideBarSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  gap: 4px;
`;

export const MobileWikiMenuButton = styled.button`
  display: none;
  line-height: 32px;

  @media (max-width: 800px) {
    ${MinimalButtonCSS}
    width: calc(100% - 12px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--themeAccent1);
    border: 1px solid var(--themeAccent1) !important;
    padding: 2px 12px;
    border-radius: 100px;

    svg {
      padding-left: 12px;
    }
  }
`;

export const WikiMenuButton = styled.button`
  ${MinimalButtonCSS}
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--themeAccent1);
  padding: 2px 12px 2px 4px;
  border-radius: 100px;
  border: 1px solid transparent !important;

  svg {
    padding-right: 8px;
  }

  &:hover {
    border: 1px solid var(--themeAccent1) !important;
  }
`;

/**
 * SKELETONS
 */

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
