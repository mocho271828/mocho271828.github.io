import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { GoogleAnalytics, usePageView } from '../src/components/GoogleAnalytics'
const inter = Inter({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  usePageView() // Google Analyticsのページビューを追跡

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
