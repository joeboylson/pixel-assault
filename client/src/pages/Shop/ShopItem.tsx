import { Product } from "../../types/sanity.types";
import { formatNumberToUSD } from "../../utils/number";
import { StyledShopItem } from "./StyledComponents";
import Image from "../../components/Image";
import { useShoppingCart } from "use-shopping-cart";
import { Product as USCProduct } from "use-shopping-cart/core";
import { makeImageUrl } from "../../utils/sanity";

interface _props {
  product: Product;
}

export default function ShopItem({ product }: _props) {
  const { addItem } = useShoppingCart();

  const imageValue = product.image?.asset;

  const handleAddToCart = () => {
    const _product: USCProduct = {
      name: product.name ?? "Unnamed Product",
      sku: product._id,
      price: product.price ?? 0,
      currency: "usd",
      image: imageValue && makeImageUrl(imageValue),
    };

    addItem(_product);
  };

  return (
    <StyledShopItem>
      <h2>{product.name ?? "No Title"}</h2>
      <p>{product.description}</p>
      <p>{formatNumberToUSD((product.price ?? -1) / 100)}</p>

      {imageValue && <Image value={imageValue} />}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </StyledShopItem>
  );
}
