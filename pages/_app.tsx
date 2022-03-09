import React from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { theme } from 'components/utils/styles/theme'
import { CSSReset } from 'components/utils/styles/reset'
import { globalCSS } from 'components/utils/styles/global'
import { ConfigProvider } from 'Context/Config'
import { AppProps } from 'next/app'

function CustomApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ConfigProvider>
      <ThemeProvider theme={theme}>
        <Global styles={CSSReset} />
        <Global styles={globalCSS} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default CustomApp
