import React from 'react'
import { render as rtlRender, RenderResult } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import { theme } from 'components/utils/styles/theme'
import { ConfigProvider } from 'Context/Config'

function render(ui: React.ReactElement, { ...options } = {}): RenderResult {
  function Wrapper({ children }) {
    return (
      <ConfigProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ConfigProvider>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options })
}

export * from '@testing-library/react'

export { render }
