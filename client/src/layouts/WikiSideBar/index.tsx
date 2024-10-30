import { useGetAllWikiItems } from "../../hooks/useGetAllWikiItems";
import { camelCaseToWords } from "../../types/string";
import { NavLink } from "react-router-dom";
import { Pages } from "../../enums";
import styled from "styled-components";

export const StyledWikiSideBar = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  gap: 24px;
  padding: 24px;
`;

export const WikiSideBarSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: start;
  gap: 4px;
`;

export function WikiSideBar() {
  const { loading, documentsByType } = useGetAllWikiItems();

  return (
    <StyledWikiSideBar>
      {loading && <p>loading...</p>}

      {documentsByType &&
        Object.entries(documentsByType).map(([typeLabel, documentsOfType]) => {
          const sectionLabel = camelCaseToWords(typeLabel);

          return (
            <WikiSideBarSection key={`section-${typeLabel}`}>
              <h3>{sectionLabel}</h3>

              {documentsOfType.map((document) => {
                if (!document.slug) return null;

                const { _id, slug, name, title } = document;
                const linkText = name ?? title;
                const linkHref = `${Pages.WIKI}/${typeLabel}/${slug.current}`;

                return (
                  <NavLink to={linkHref} key={_id}>
                    {linkText ?? `Unnamed ${sectionLabel}`}
                  </NavLink>
                );
              })}
            </WikiSideBarSection>
          );
        })}
    </StyledWikiSideBar>
  );
}
