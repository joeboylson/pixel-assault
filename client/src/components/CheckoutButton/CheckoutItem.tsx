import { CartEntry } from "use-shopping-cart/core";
import { StyledCheckoutItem } from "./StyledComponents";
import { useShoppingCart } from "use-shopping-cart";

interface _props {
  cartEntry: CartEntry;
}

export default function CheckoutItem({ cartEntry }: _props) {
  const { incrementItem, decrementItem } = useShoppingCart();

  const handleIncrement = () => incrementItem(cartEntry.id);
  const handleDecrement = () => decrementItem(cartEntry.id);

  return (
    <StyledCheckoutItem>
      <img src={cartEntry.image} alt={cartEntry.image} />

      <div>
        <p>
          {cartEntry.name} (x{cartEntry.quantity})
        </p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>

      <p>{cartEntry.formattedValue}</p>
    </StyledCheckoutItem>
  );
}
