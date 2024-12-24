import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "use-shopping-cart";
import PageTransitionWrapper from "./context/PageTransitionContext";
import { Fonts, GlobalStyle } from "./components/GlobalStyle";
import ThemeWrapper from "./context/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeWrapper>
    <React.StrictMode>
      <Fonts />
      <GlobalStyle />
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
  </ThemeWrapper>
);
