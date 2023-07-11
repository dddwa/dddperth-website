import { ThemeProvider } from 'emotion-theming'
import App, { Container } from 'next/app'
import React from 'react'
import '../../styles/screen.scss'
import { theme } from '../components/utils/styles/theme'

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

export default CustomApp
