import { ThemeProvider } from 'emotion-theming'
import App, { Container } from 'next/app'
import React from 'react'
import authentication from 'react-azure-adb2c'
import { theme } from '../components/utils/styles/theme'

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    authentication.initialize({
      applicationId: '245f53ad-9937-4a01-b4ba-f77273097d21',
      cacheLocation: 'sessionStorage',
      instance: 'https://login.microsoftonline.com/tfp/',
      postLogoutRedirectUri: 'http://localhost:3000/',
      redirectUri: 'http://localhost:3000/',
      scopes: ['openid'],
      signInPolicy: 'B2C_1_SignupSignin',
      tenant: 'dddaustraliaattendees.onmicrosoft.com',
    })
  }

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
