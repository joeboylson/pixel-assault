import { CartEntry } from "use-shopping-cart/core";

export type GetCheckoutUrlPostBody = {
  cartEntries: CartEntry[];
  returnUrlHost: string;
};
