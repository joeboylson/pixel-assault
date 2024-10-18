import express, { Request, Response } from "express";
import { stripeInstance } from "../../utils/stripe";
import { GetCheckoutUrlPostBody } from "@shared/types";

export const stripeRouter = express.Router();

stripeRouter.post(
  "/get-checkout-url",
  async (request: Request, response: Response) => {
    try {
      const { returnUrlHost, cartEntries } =
        request.body as GetCheckoutUrlPostBody;

      const lineItems = cartEntries.map((lineItem) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: lineItem.name,
              images: [lineItem.image],
            },
            unit_amount: lineItem.price,
          },
          quantity: lineItem.quantity,
        };
      });

      const session = await stripeInstance.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: `${returnUrlHost}/shop/success`,
        cancel_url: `${returnUrlHost}/shop`,
      });

      response.status(200).send(session.url);
    } catch (error) {
      console.error(error);
      response.status(500).send(error);
    }
  }
);
