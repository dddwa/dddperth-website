import { css } from '@emotion/react'
import { theme } from './theme'

export const globalCSS = css`
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: ${theme.fonts.main};
    color: ${theme.colors.grey800};
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  a {
    color: ${theme.colors.grey800};
    transition: color 0.3s linear;
  }

  a:focus,
  a:hover {
    color: ${theme.colors.dddpink};
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`
