import { CartEntry } from "use-shopping-cart/core";
import {
  CheckoutItemTitle,
  PlusMinusButton,
  StyledCheckoutItem,
  StyledCheckoutItemContent,
} from "./StyledComponents";
import { useShoppingCart } from "use-shopping-cart";
import { Plus, Minus } from "@phosphor-icons/react";

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

      <StyledCheckoutItemContent>
        <CheckoutItemTitle>
          {cartEntry.name} (x{cartEntry.quantity})
        </CheckoutItemTitle>
        <PlusMinusButton onClick={handleIncrement}>
          <Plus size={12} color={"#000000"} />
        </PlusMinusButton>
        <PlusMinusButton onClick={handleDecrement}>
          <Minus size={12} color={"#000000"} />
        </PlusMinusButton>
      </StyledCheckoutItemContent>

      <p>{cartEntry.formattedValue}</p>
    </StyledCheckoutItem>
  );
}
