import { useEffect, useState } from "react";
import { sanityClient } from "../utils/sanity";
import { Product } from "../types/sanity.types";

const ALL_PRODUCTS_QUERY = `*[_type == "product"]{
  image {
    asset->,
    relatedAttribution->
  }
}`;

export function useAllProducts() {
  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!products && !loading) {
      setLoading(true);
      sanityClient
        .fetch(ALL_PRODUCTS_QUERY)
        .then(setProducts)
        .catch(() => setProducts([]))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [loading, setLoading, products]);

  return { products, loading };
}
