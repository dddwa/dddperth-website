import React from 'react'
import { render as rtlRender, RenderResult } from '@testing-library/react'
import { CacheProvider, ThemeProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { theme } from 'components/utils/styles/theme'
import { ConfigProvider } from 'Context/Config'

function render(ui: React.ReactElement, { ...options } = {}): RenderResult {
  const emotionCache = createCache({
    key: 'test-cache',
  })
  emotionCache.compat = true

  function Wrapper({ children }) {
    return (
      <ConfigProvider>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </CacheProvider>
      </ConfigProvider>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'

export { render }
