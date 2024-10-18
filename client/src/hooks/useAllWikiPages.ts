import { useEffect, useState } from "react";
import { sanityClient } from "../utils/sanity";
import { WikiPage } from "../types/sanity.types";

const ALL_WIKIPAGES_QUERY = `*[_type == "wikiPage"]`;

export function useAllWikiPages() {
  const [wikiPages, setWikiPages] = useState<WikiPage[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!wikiPages && !loading) {
      setLoading(true);
      sanityClient
        .fetch(ALL_WIKIPAGES_QUERY)
        .then(setWikiPages)
        .catch(() => setWikiPages([]))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading, setLoading, wikiPages]);

  return { wikiPages, loading };
}
