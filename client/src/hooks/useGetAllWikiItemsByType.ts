import { useEffect, useState } from "react";
import { sanityClient } from "../utils/sanity";
import { SanityDocument } from "@sanity/client";

export function useGetAllWikiItemsByType(type: string) {
  const [documents, setDocuments] = useState<SanityDocument[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!documents && !loading) {
      setLoading(true);

      const query = `*[_type=="${type}"]{...}`;

      sanityClient
        .fetch(query)
        .then(setDocuments)
        .catch((e) => setDocuments([]))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading, setLoading, documents]);

  return { loading, documents };
}
