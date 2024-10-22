import {
  CheckoutItemsWrapper,
  CheckoutModalBody,
  PlusMinusButton,
  StyledCheckoutItem,
} from "./StyledComponents";
import { isEmpty } from "lodash";
import { useStripePayment } from "../../hooks/useStripePayment";
import { useShoppingCart } from "use-shopping-cart";
import CheckoutItem from "./CheckoutItem";
import Modal from "../Modal";
import { iconProps } from "../../theme/icon";
import { ShoppingCart } from "@phosphor-icons/react";

export default function CheckoutButton() {
  const { formattedTotalPrice, cartDetails, clearCart } = useShoppingCart();
  const { loading, doStripeCheckout, cartEntries } = useStripePayment();

  const noItemsInCart = isEmpty(cartEntries);

  return (
    <Modal
      buttonDisabled={noItemsInCart}
      buttonChild={<ShoppingCart {...iconProps} color={"#FFFFFF"} size={24} />}
    >
      <CheckoutModalBody>
        <h2>Review Products</h2>

        {cartDetails && !noItemsInCart && (
          <CheckoutItemsWrapper>
            {cartEntries.map((cartEntry) => (
              <CheckoutItem key={cartEntry.id} cartEntry={cartEntry} />
            ))}
          </CheckoutItemsWrapper>
        )}

        <StyledCheckoutItem>
          <PlusMinusButton onClick={clearCart}>Clear Cart</PlusMinusButton>
          <PlusMinusButton onClick={doStripeCheckout} disabled={loading}>
            Continue to Payment
          </PlusMinusButton>

          <p>{formattedTotalPrice ?? "$0.00"}</p>
        </StyledCheckoutItem>
      </CheckoutModalBody>
    </Modal>
  );
}
