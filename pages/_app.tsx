import Provider from 'components/Provider';
import Seo from 'components/SEO';
import type { AppProps } from 'next/app';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Seo />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
