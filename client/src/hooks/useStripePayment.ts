import axios from "axios";
import { isEmpty } from "lodash";
import { useCallback, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { GetCheckoutUrlPostBody } from "@shared/types";

export const useStripePayment = () => {
  const { cartDetails } = useShoppingCart();
  const [loading, setLoading] = useState(false);

  const cartEntries = Object.values(cartDetails ?? {});

  const doStripeCheckout = useCallback(() => {
    try {
      if (isEmpty(cartEntries)) return;

      const body: GetCheckoutUrlPostBody = {
        cartEntries,
        returnUrlHost: window.location.origin,
      };

      setLoading(true);
      axios
        .post("/api/stripe/get-checkout-url", body)
        .then((response) => {
          const stripePaymentUrl = response.data as string;
          const validUrl = stripePaymentUrl.startsWith(
            "https://checkout.stripe.com/c/pay"
          );

          if (!validUrl) {
            setLoading(false);
            throw new Error("Invalid payment URL");
          }

          window.open(stripePaymentUrl, "_self");
        })
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [cartEntries]);

  return { loading, doStripeCheckout, cartEntries };
};
