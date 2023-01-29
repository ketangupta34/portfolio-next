import '@portfolio/styles/global.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ketan Gupta</title>
        <link rel="ketangupta34.dev" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
