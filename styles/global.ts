/** @format */

import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h1, h2, h3, h4, h5, p, a{
        color: ${theme.colors.black};
    }
    h1, h2, h3, h4, a{
        font-family: Monument;
    }
    li{
        list-style: none;
    }
    img{
        width: 100%;
        display: block;
    }
    html{
        scroll-behavior: smooth;
        overflow-x: hidden;
        overflow-y: scroll;
        scrollbar-width: thin !important;
        scrollbar-color: ${theme.colors.black} ${theme.colors.white};
        &::-webkit-scrollbar {
          width: 10px;
          height: 1px;
          width: thin;
        }
        &::-webkit-scrollbar-track {
          border-radius: 2px;
          box-shadow: inset 0 0 10px ${theme.colors.background}
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 2px;
          background-color: ${theme.colors.black};
        }
    }
    body{
        isolation: isolate;
        cursor: default;
        overflow-x: hidden;
        background: ${theme.colors.background};
        min-height: 100vh;
        min-height: -webkit-fill-available;
        font-family: Grotesk;
    }
    a{
        color: inherit;
        text-decoration: none;
        font-weight: 800;
        text-transform: uppercase;
        mix-blend-mode: difference;
        outline: none;
        &:hover{
            -webkit-text-fill-color: var(--burlywood);
            -webkit-text-stroke: calc(var(--VW)*0.14) var(--black);
            cursor: none;
        }
    }
`;

export { GlobalStyles };
