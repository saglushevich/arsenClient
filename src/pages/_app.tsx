import type { AppProps } from 'next/app'
import GlobalStyles from "@styles";
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Component {...pageProps} />
        <GlobalStyles />
    </>
  )
}
