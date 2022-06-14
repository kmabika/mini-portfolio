import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* GroTesk Light*/}
          <link
            rel="preload"
            href="/fonts/GroTeskLight.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          {/* GroTesk Light*/}
          <link
            rel="preload"
            href="/GroTeskSemiBold.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          {/* Monument Extended Bold*/}
          <link
            rel="preload"
            href="/fonts/MonumentExtendedBold.otf"
            as="font"
            type="font/otf"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
