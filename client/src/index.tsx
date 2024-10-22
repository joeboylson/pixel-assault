import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "use-shopping-cart";
import { GlobalTheme } from "./theme/global";
import PageTransitionWrapper from "./context/PageTransition";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalTheme />
    <CartProvider
      cartMode="checkout-session"
      stripe=""
      currency="USD"
      shouldPersist
    >
      <PageTransitionWrapper>
        <RouterProvider router={router} />
      </PageTransitionWrapper>
    </CartProvider>
  </React.StrictMode>
);
