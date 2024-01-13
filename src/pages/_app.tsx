import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="google-adsense-account" content="ca-pub-4284624709758827" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
