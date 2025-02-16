import { useEffect, useState } from "react";
import { sanityClient } from "../utils/sanity";
import { groupBy } from "lodash";
import { SanityDocument } from "@sanity/client";

const QUERY = `*[defined(slug)]{
    ...,
    relatedMilitatyUnitType->,
    relatedFaction->,
    image {
      asset->,
      relatedAttribution->
    }
  }`;

export function useGetAllWikiItems() {
  const [documents, setDocuments] = useState<SanityDocument[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!documents && !loading) {
      setLoading(true);

      sanityClient
        .fetch(QUERY)
        .then(setDocuments)
        .catch(() => setDocuments([]))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading, setLoading, documents]);

  return { loading, documents, documentsByType: groupBy(documents, "_type") };
}
