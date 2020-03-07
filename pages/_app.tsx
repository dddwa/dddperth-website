import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { theme } from '../components/utils/styles/theme'
import { CSSReset } from '../components/utils/styles/reset'
import { globalCSS } from '../components/utils/styles/global'

function CustomApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={CSSReset} />
      <Global styles={globalCSS} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default CustomApp
