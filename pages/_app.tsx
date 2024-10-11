import type { AppProps } from 'next/app'
import { GoogleAnalytics, usePageView } from '../src/components/GoogleAnalytics'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView()
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
