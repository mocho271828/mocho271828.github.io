import { useRouter } from "next/router";
import React, { useEffect } from 'react'

import { existsGaId, pageview } from '../src/lib/gtag'
import GoogleAnalytics from '../src/components/GoogleAnalytics'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    if (!existsGaId) {
      return
    }

    const handleRouteChange = (path) => {
      pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <GoogleAnalytics />

      <Component {...pageProps} />
    </>
  )
}

export default App
