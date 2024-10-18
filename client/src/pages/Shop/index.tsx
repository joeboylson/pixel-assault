import Image from "../../components/Image";
import { useAllProducts } from "../../hooks/useAllProducts";
import PageWrapper from "../../layouts/PageWrapper";
import { formatNumberToUSD } from "../../utils/number";
import { ShopItem, StyledShop } from "./StyledComponents";

export function Shop() {
  const { loading, products } = useAllProducts();

  return (
    <PageWrapper>
      {loading && <p>loading...</p>}

      <StyledShop>
        {products &&
          products.map((product) => {
            const _value = product.image?.asset;

            return (
              <ShopItem key={product._id}>
                <h2>{product.name ?? "No Title"}</h2>
                <p>{product.description}</p>
                <p>{formatNumberToUSD((product.price ?? -1) / 100)}</p>

                {_value && <Image value={_value} />}
              </ShopItem>
            );
          })}
      </StyledShop>
    </PageWrapper>
  );
}
