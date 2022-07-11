import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head';
import { ThemeProvider } from "styled-components";
import Footer from '@/layout/Footer';
import Header from '@/layout/Header';

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  const theme = {
    colors: {
      primary: "green"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Learing NextJS</title>
        <meta name='description' content='Learing from the zero' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
