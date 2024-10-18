import { useAllWikiPages } from "../../hooks/useAllWikiPages";
import PageWrapper from "../../layouts/PageWrapper";
import { useMemo } from "react";
import { PortableText } from "@portabletext/react";
import { Link, useParams } from "react-router-dom";
import { Pages } from "../../enums";
import {
  SelectedWikiPageWrapper,
  StyledWiki,
  WikiSideBar,
} from "./StyledComponents";
import Image from "../../components/Image";

export function Wiki() {
  const { loading, wikiPages } = useAllWikiPages();

  const { slug } = useParams();

  const selectedWikiPage = useMemo(() => {
    if (wikiPages) {
      const pageMatchingSlug = wikiPages.find((i) => i.slug?.current === slug);
      return pageMatchingSlug ?? wikiPages[0];
    }
  }, [wikiPages, slug]);

  return (
    <PageWrapper>
      {loading && <p>loading...</p>}

      <StyledWiki data-id="StyledWiki">
        <WikiSideBar>
          {wikiPages &&
            wikiPages.map((wikiPage) => {
              const _slug = wikiPage.slug?.current;
              const to = `${Pages.WIKI}/${_slug}`;
              return (
                <Link key={_slug} to={to}>
                  {wikiPage.title ?? "No title"}
                </Link>
              );
            })}
        </WikiSideBar>

        <SelectedWikiPageWrapper>
          {selectedWikiPage && (
            <>
              <h2>{selectedWikiPage.title ?? "No Title"}</h2>
              <code>{selectedWikiPage.slug?.current ?? ""}</code>
              <PortableText
                value={selectedWikiPage.content ?? []}
                components={{
                  types: {
                    image: Image,
                  },
                }}
              />
            </>
          )}
        </SelectedWikiPageWrapper>
      </StyledWiki>
    </PageWrapper>
  );
}
