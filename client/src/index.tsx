import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { CartProvider } from "use-shopping-cart";
import PageTransitionWrapper from "./context/PageTransitionContext";
import { GlobalStyle } from "./components/GlobalStyle";
import ThemeWrapper from "./context/ThemeContext";
import LilCrowGuy from "./layouts/LilCrowGuy";
import PlayerTrackerWrapper from "./context/PlayerTrackerContext";

// fonts
import "./fonts.css";

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
          <PlayerTrackerWrapper>
            {/* <LilCrowGuy /> */}
            <RouterProvider router={router} />
          </PlayerTrackerWrapper>
        </PageTransitionWrapper>
      </CartProvider>
    </React.StrictMode>
  </ThemeWrapper>
);
