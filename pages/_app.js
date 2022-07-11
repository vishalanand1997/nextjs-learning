import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  const theme = {
    colors: {
      primary: "green"
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
