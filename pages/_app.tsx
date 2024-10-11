import type { AppProps } from 'next/app'
import { GoogleAnalytics, usePageView } from '../src/components/GoogleAnalytics'

function MyApp({ Component, pageProps }: AppProps) {
  usePageView() // Google Analyticsのページビューを追跡

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
