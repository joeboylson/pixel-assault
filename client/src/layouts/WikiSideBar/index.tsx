import { useGetAllWikiItems } from "../../hooks/useGetAllWikiItems";
import { camelCaseToWords } from "../../types/string";
import { useNavigate } from "react-router-dom";
import { Pages } from "../../enums";
import { useToggle } from "../../hooks/useToggle";
import { DotOutline, List } from "@phosphor-icons/react";
import {
  MobileWikiMenuButton,
  SkeletonWikiSideBar,
  StyledWikiSideBar,
  WikiMenuButton,
  WikiSideBarSection,
} from "./StyledComponents";
import { get } from "lodash";

const typeLabelTranslations = {
  militaryUnitType: "Military Units",
  faction: "Factions",
  card: "Cards",
  storyPage: "Story Pages",
};

export function WikiSideBar() {
  const navigate = useNavigate();

  const { loading, documentsByType } = useGetAllWikiItems();

  const {
    disable: closeWikiNav,
    enable: openWikiNav,
    value: wikiNavIsOpen,
  } = useToggle();

  const className = wikiNavIsOpen ? "wiki-nav-is-open" : "";

  const handleNav = (to: string) => {
    closeWikiNav();
    navigate(to);
  };

  return (
    <>
      <MobileWikiMenuButton onClick={openWikiNav}>
        Wiki Menu <List size={18} color="var(--themeAccent1)" />
      </MobileWikiMenuButton>
      <StyledWikiSideBar className={className}>
        {loading && <SkeletonWikiSideBar />}

        {documentsByType &&
          Object.entries(documentsByType).map(
            ([typeLabel, documentsOfType]) => {
              const sectionLabel =
                get(typeLabelTranslations, typeLabel) ??
                camelCaseToWords(typeLabel);

              return (
                <WikiSideBarSection key={`section-${typeLabel}`}>
                  <h3>{sectionLabel}</h3>

                  {documentsOfType.map((document) => {
                    if (!document.slug) return null;

                    const { _id, slug, name, title } = document;
                    const linkText = name ?? title;
                    const linkHref = `${Pages.WIKI}/${typeLabel}/${slug.current}`;
                    const _onClick = () => handleNav(linkHref);

                    return (
                      <WikiMenuButton onClick={_onClick} key={_id}>
                        <DotOutline size={16} color="var(--themeAccent1)" />
                        {linkText ?? `Unnamed ${sectionLabel}`}
                      </WikiMenuButton>
                    );
                  })}
                </WikiSideBarSection>
              );
            }
          )}
      </StyledWikiSideBar>
    </>
  );
}
