import styled from "styled-components";
import PageWrapper from "../../layouts/PageWrapper";
import ActiveWikiPage from "../../layouts/ActiveWikiPage";
import { WikiSideBar } from "../../layouts/WikiSideBar";
import { WithColorTransitionCSS } from "../../utils/transition";

export const StyledWiki = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  max-width: 1200px;
  margin: 0 auto;
  gap: 48px;
  padding-bottom: 72px;
  padding-left: 12px;

  * {
    ${WithColorTransitionCSS}
  }

  a {
    color: var(--themeAccent1) !important;
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    gap: 12px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 24px;

    img {
      max-width: 300px;
      margin: auto;
    }
  }
`;

export function Wiki() {
  return (
    <PageWrapper>
      <StyledWiki data-id="StyledWiki">
        <WikiSideBar />
        <ActiveWikiPage />
      </StyledWiki>
    </PageWrapper>
  );
}
