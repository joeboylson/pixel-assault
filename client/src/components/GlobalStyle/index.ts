import { createGlobalStyle, css } from "styled-components";

import FiveXFivePixel from "../../assets/fonts/5x5_pixel.ttf";

import PixelOperatorBold from "../../assets/fonts/pixel_operator/PixelOperator-Bold.ttf";
import PixelOperator from "../../assets/fonts/pixel_operator/PixelOperator.ttf";
import PixelOperator8Bold from "../../assets/fonts/pixel_operator/PixelOperator8-Bold.ttf";
import PixelOperator8 from "../../assets/fonts/pixel_operator/PixelOperator8.ttf";
import PixelOperatorHB from "../../assets/fonts/pixel_operator/PixelOperatorHB.ttf";
import PixelOperatorHB8 from "../../assets/fonts/pixel_operator/PixelOperatorHB8.ttf";
import PixelOperatorHBSC from "../../assets/fonts/pixel_operator/PixelOperatorHBSC.ttf";
import PixelOperatorMonoBold from "../../assets/fonts/pixel_operator/PixelOperatorMono-Bold.ttf";
import PixelOperatorMono from "../../assets/fonts/pixel_operator/PixelOperatorMono.ttf";
import PixelOperatorMono8Bold from "../../assets/fonts/pixel_operator/PixelOperatorMono8-Bold.ttf";
import PixelOperatorMono8 from "../../assets/fonts/pixel_operator/PixelOperatorMono8.ttf";
import PixelOperatorMonoHB from "../../assets/fonts/pixel_operator/PixelOperatorMonoHB.ttf";
import PixelOperatorMonoHB8 from "../../assets/fonts/pixel_operator/PixelOperatorMonoHB8.ttf";
import PixelOperatorSCBold from "../../assets/fonts/pixel_operator/PixelOperatorSC-Bold.ttf";
import PixelOperatorSC from "../../assets/fonts/pixel_operator/PixelOperatorSC.ttf";

export const Fonts = createGlobalStyle`
  @font-face {
    font-family: "FiveXFivePixel";
    src: url(${FiveXFivePixel}) format("truetype");
    font-weight: 700;
  }

@font-face {
    font-family: "PixelOperatorBold";
    src: url(${PixelOperatorBold}) format("truetype");
    font-weight: 700;
  }

  @font-face {
    font-family: "PixelOperator";
    src: url("${PixelOperator}") format("truetype");
    font-weight: normal;
    }

  @font-face {
    font-family: "PixelOperator8Bold";
    src: url(${PixelOperator8Bold}) format("truetype");
    font-weight: bold;
  }

  @font-face {
    font-family: "PixelOperator8";
    src: url(${PixelOperator8}) format("truetype");
    font-weight: normal;
  }

  @font-face {
    font-family: "PixelOperatorHB";
    src: url(${PixelOperatorHB}) format("truetype");
    font-weight: normal;
  }

  @font-face {
    font-family: "PixelOperatorHB8";
    src: url(${PixelOperatorHB8}) format("truetype");
    font-weight: normal;
  }

  @font-face {
    font-family: "PixelOperatorHBSC";
    src: url(${PixelOperatorHBSC}) format("truetype");
    font-weight: normal;
  }

  @font-face {
    font-family: "PixelOperatorMonoBold";
    src: url(${PixelOperatorMonoBold}) format("truetype");
    font-weight: bold;
  }

  @font-face {
    font-family: "PixelOperatorMono";
    src: url(${PixelOperatorMono}) format("truetype");
    font-weight: normal;
  }

  @font-face {
    font-family: "PixelOperatorMono8Bold";
    src: url(${PixelOperatorMono8Bold}) format("truetype");
    font-weight: bold;
  }

  @font-face {
    font-family: "PixelOperatorMono8";
    src: url(${PixelOperatorMono8}) format("truetype");
    font-weight: normal;
  }

  @font-face {
    font-family: "PixelOperatorMonoHB";
    src: url(${PixelOperatorMonoHB}) format("truetype");
    font-weight: normal;
  }

  @font-face {
    font-family: "PixelOperatorMonoHB8";
    src: url(${PixelOperatorMonoHB8}) format("truetype");
    font-weight: normal;
  }

  @font-face {
    font-family: "PixelOperatorSCBold";
    src: url(${PixelOperatorSCBold}) format("truetype");
    font-weight: bold;
  }

  @font-face {
    font-family: "PixelOperatorSC";
    src: url(${PixelOperatorSC}) format("truetype");
    font-weight: normal;
  }

`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: PixelOperator;
  }

  body,
  #root {
    width: 100vw;
    height: 100vh;
  }

  img {
    width: 100%;
  }

  ul {
    padding-left: 40px;
  }

  p, b, i, button {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--themeAccent1);
      * { color: var(--themeAccent1); }    
    }
  }

  h3, h2, h1 {
    font-family: PixelOperator8;
    -webkit-font-smoothing: none;
  }

  h3 {
    font-size: 21px;
  }
  
  h2 {
    font-size: 34px;
  }
  
  h1 {
    font-size: 55px;
  }
`;
