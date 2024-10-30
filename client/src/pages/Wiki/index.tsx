import PageWrapper from "../../layouts/PageWrapper";
import ActiveWikiPage from "../../layouts/ActiveWikiPage";
import { WikiSideBar } from "../../layouts/WikiSideBar";
import styled from "styled-components";

export const StyledWiki = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
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
