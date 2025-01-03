import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "use-shopping-cart";
import PageTransitionWrapper from "./context/PageTransitionContext";
import { GlobalStyle } from "./components/GlobalStyle";
import ThemeWrapper from "./context/ThemeContext";

// fonts
import "./fonts.css";
import LilCrowGuy from "./layouts/LilCrowGuy";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeWrapper>
    <React.StrictMode>
      <GlobalStyle />
      <CartProvider
        cartMode="checkout-session"
        stripe=""
        currency="USD"
        shouldPersist
      >
        <PageTransitionWrapper>
          <LilCrowGuy />
          <RouterProvider router={router} />
        </PageTransitionWrapper>
      </CartProvider>
    </React.StrictMode>
  </ThemeWrapper>
);
