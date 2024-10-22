import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "use-shopping-cart";
import { GlobalTheme } from "./theme";
import PageTransitionWrapper from "./context/PageTransition";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CartProvider
      cartMode="checkout-session"
      stripe=""
      currency="USD"
      shouldPersist
    >
      <PageTransitionWrapper>
        <GlobalTheme />
        <RouterProvider router={router} />
      </PageTransitionWrapper>
    </CartProvider>
  </React.StrictMode>
);
