import { useEffect, useState } from "react";
import { sanityClient } from "../utils/sanity";
import { isEmpty } from "lodash";
import { SanityDocument } from "@sanity/client";

export function useGetWikiItemBySlug(slug: string) {
  const [document, setDocument] = useState<SanityDocument>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEmpty(slug)) return;

    console.log(">>> pass 1");

    if (document?.slug.current !== slug) {
      console.log(">>> pass 2");

      setLoading(true);

      const query = `*[slug.current=="${slug}"]{
        ...,
        relatedMilitatyUnitType->,
        relatedFaction->
      }
      `;

      sanityClient
        .fetch(query)
        .then((result) => setDocument(result[0]))
        .catch((error) => {
          console.error(error);
          setDocument({} as any);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading, setLoading, document, slug]);

  return { loading, document };
}