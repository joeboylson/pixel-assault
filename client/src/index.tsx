import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "use-shopping-cart";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

console.log(process.env);

root.render(
  <React.StrictMode>
    <CartProvider
      cartMode="checkout-session"
      stripe=""
      currency="USD"
      shouldPersist
    >
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
