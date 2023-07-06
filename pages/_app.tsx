import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import Camado from "@/public/camado.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Choaib Mouhrach</title>
        <link rel="icon" href={Camado.src} />
      </Head>
      <Component {...pageProps} className={inter.className} />
    </>
  );
}
