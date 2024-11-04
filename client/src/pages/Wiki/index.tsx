import PageWrapper from "../../layouts/PageWrapper";
import ActiveWikiPage from "../../layouts/ActiveWikiPage";
import { WikiSideBar } from "../../layouts/WikiSideBar";
import styled from "styled-components";
import { WithColorTransitionCSS } from "../../utils/transition";

export const StyledWiki = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;

  * {
    ${WithColorTransitionCSS}
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
