import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
  <>
    <Head>
      <title>IM 1908</title>
      <meta name="description" content="Клуб болельщиков Миланского Интера" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;600&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp;
