import styled from "styled-components";
import { LayoutValues } from "../../enums/layout";

const { HEADER_HEIGHT, FOOTER_HEIGHT } = LayoutValues;

export const StyledWiki = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
`;

export const WikiSideBar = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  gap: 8px;

  padding: 24px;
  border-right: 1px solid #ddd;
`;

export const SelectedWikiPageWrapper = styled.div`
  padding: 24px;
  height: calc(100vh - 48px - ${HEADER_HEIGHT + FOOTER_HEIGHT}px);
  overflow-y: scroll;

  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  gap: 8px;
`;
