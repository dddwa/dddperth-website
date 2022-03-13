import React from 'react'
import { CacheProvider, Global, ThemeProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { theme } from 'components/utils/styles/theme'
import { CSSReset } from 'components/utils/styles/reset'
import { globalCSS } from 'components/utils/styles/global'
import { ConfigProvider } from 'Context/Config'
import { AppProps } from 'next/app'
import Script from 'next/script'

function CustomApp({ Component, pageProps }: AppProps): JSX.Element {
  const emotionCache = createCache({
    key: 'emotion-cache',
  })
  emotionCache.compat = true

  return (
    <ConfigProvider>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Global styles={CSSReset} />
          <Global styles={globalCSS} />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
      {process.env.NEXT_PUBLIC_APPINSIGHTS_INSTRUMENTATIONKEY ? (
        <Script
          id="appInsightsScript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        var appInsights=window.appInsights||function(a){
        function b(a){c[a]=function(){var b=arguments;c.queue.push(function(){c[a].apply(c,b)})}}var c={config:a},d=document,e=window;setTimeout(function(){var b=d.createElement("script");b.src=a.url||"https://az416426.vo.msecnd.net/scripts/a/ai.0.js",d.getElementsByTagName("script")[0].parentNode.appendChild(b)});try{c.cookie=d.cookie}catch(a){}c.queue=[];for(var f=["Event","Exception","Metric","PageView","Trace","Dependency"];f.length;)b("track"+f.pop());if(b("setAuthenticatedUserContext"),b("clearAuthenticatedUserContext"),b("startTrackEvent"),b("stopTrackEvent"),b("startTrackPage"),b("stopTrackPage"),b("flush"),!a.disableExceptionTracking){f="onerror",b("_"+f);var g=e[f];e[f]=function(a,b,d,e,h){var i=g&&g(a,b,d,e,h);return!0!==i&&c["_"+f](a,b,d,e,h),i}}return c
        }({
            instrumentationKey:"${process.env.NEXT_PUBLIC_APPINSIGHTS_INSTRUMENTATIONKEY}"
        });
        window.appInsights=appInsights;
      `,
          }}
        />
      ) : null}
    </ConfigProvider>
  )
}

export default CustomApp
