import { createGlobalStyle } from "styled-components";

import { GroteskRegular } from "@/public/assets/fonts/fonts";
import { devices } from "@/utils/devices";
import { COLOR_BLACK, COLOR_WHITE_LIGHT } from "@/utils/colorPalette";

export const GlobalStyle = createGlobalStyle`
    body {
      margin:0;
      padding:0;
      border: 0;
      outline: 0;
      overflow-x: hidden;
      background-size: auto;
      background-color: ${COLOR_BLACK};
      font-family: ${GroteskRegular.style.fontFamily}
    }

    :root {
      color-scheme: dark;
    }

    * {
      box-sizing: border-box;
      border: 0 solid;
    }
    
    html {
      scroll-behavior: smooth;
    }

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    h1, h2, h3, h4, h5, p {
      margin: 0;
      color: ${COLOR_WHITE_LIGHT};
    }

    a, button {
      font-family: ${GroteskRegular.style.fontFamily}
    }
`;

export const PageHideOuterScroll = createGlobalStyle<{
  shouldHide: boolean;
}>`
  @media ${devices.mobileM} {
    body {
      overflow-y: ${(p) => (p.shouldHide ? "hidden" : "auto")};
    }
  }
`;
