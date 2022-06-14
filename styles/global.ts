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
        overflow: hidden;
        min-height: -webkit-fill-available;
    }
    body{
        isolation: isolate;
        min-height: 100vh;
        min-height: -webkit-fill-available;
        font-family: Grotesk;
    }
`;

export { GlobalStyles };
