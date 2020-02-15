import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { theme } from '../components/utils/styles/theme'

function CustomApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default CustomApp
