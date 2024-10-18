import { CheckoutItemsWrapper, StyledCheckoutItem } from "./StyledComponents";
import { isEmpty } from "lodash";
import { useStripePayment } from "../../hooks/useStripePayment";
import { useShoppingCart } from "use-shopping-cart";
import CheckoutItem from "./CheckoutItem";
import Modal from "../Modal";

export default function CheckoutButton() {
  const { formattedTotalPrice, cartDetails, clearCart } = useShoppingCart();
  const { loading, doStripeCheckout, cartEntries } = useStripePayment();

  const noItemsInCart = isEmpty(cartEntries);

  return (
    <Modal buttonDisabled={noItemsInCart} buttonText="Checkout">
      <h2>Review...</h2>
      <p>Loading: {loading ? "Yes" : "No"}</p>

      {cartDetails && !noItemsInCart && (
        <CheckoutItemsWrapper>
          {cartEntries.map((cartEntry) => (
            <CheckoutItem key={cartEntry.id} cartEntry={cartEntry} />
          ))}
        </CheckoutItemsWrapper>
      )}

      <StyledCheckoutItem>
        <button onClick={clearCart}>Clear Cart</button>
        <button onClick={doStripeCheckout} disabled={loading}>
          Continue to Payment
        </button>

        <p>{formattedTotalPrice ?? "$0.00"}</p>
      </StyledCheckoutItem>
    </Modal>
  );
}
