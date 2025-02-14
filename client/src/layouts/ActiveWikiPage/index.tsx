import { useParams } from "react-router-dom";
import styled from "styled-components";
import { LayoutValues } from "../../enums";
import { useGetWikiItemBySlug } from "../../hooks/useGetWikiItemBySlug";
import WikiMilitaryUnitType from "../WikiMilitaryUnitType";
import WikiFaction from "../WikiFaction";
import WikiStoryPage from "../WikiStoryPage";
import WikiCard from "../WikiCard";
import { useMemo } from "react";
import WikiWelcomePage from "../WikiWelcomePage";

const { HEADER_HEIGHT, FOOTER_HEIGHT } = LayoutValues;

export const StyledActiveWikiPage = styled.div`
  padding: 72px;
  min-height: 100vh;
  overflow-y: scroll;

  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  gap: 8px;
`;

export default function ActiveWikiPage() {
  const { slug } = useParams();
  const { document, loading } = useGetWikiItemBySlug(slug ?? "");

  const Component = useMemo(() => {
    const componentProps = { document };

    switch (document?._type) {
      case "militaryUnitType":
        return () => <WikiMilitaryUnitType {...componentProps} />;
      case "faction":
        return () => <WikiFaction {...componentProps} />;
      case "storyPage":
        return () => <WikiStoryPage {...componentProps} />;
      case "card":
        return () => <WikiCard {...componentProps} />;
      default:
        return () => <span />;
    }
  }, [document]);

  return (
    <StyledActiveWikiPage>
      {loading ? (
        // if loading
        <p>Loading...</p>
      ) : (
        <>
          {!!document ? (
            // if document
            <Component />
          ) : (
            // if not loading AND no document
            <WikiWelcomePage />
          )}
        </>
      )}
    </StyledActiveWikiPage>
  );
}
