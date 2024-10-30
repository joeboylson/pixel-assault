import { useEffect, useState } from "react";
import { sanityClient } from "../utils/sanity";
import { groupBy } from "lodash";
import { Slug } from "../types/sanity.types";

type WikiItem = {
  _id: string;
  _type: string;
  slug?: Slug;
  name?: string;
  title?: string;
};

/**
 * Get all items where:
 * - "slug" is defined
 */
const QUERY = `*[defined(slug)]{_id, _type, slug, name, title}`;

export function useGetAllWikiItems() {
  const [documents, setDocuments] = useState<WikiItem[]>();
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
