/** @format */

import Provider from "components/Provider";
import Seo from "components/SEO";
import { CursorContextProvider } from "context/cursor";
import Cursor from "components/Cursor";
import type { AppProps } from "next/app";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Seo />
      <CursorContextProvider>
        <Component {...pageProps} />
        <Cursor />
      </CursorContextProvider>
    </Provider>
  );
}

export default MyApp;
