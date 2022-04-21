import '@emotion/react'

export const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    grey800: '#4E5052',
    grey300: '#E6EAEA',
    grey400: '#bec1c0',
    grey100: '#F4F7F6',
    dddpink: '#D2438E',
    dddpink600: '#be2373',
    ///////////////////////////
    primary: '#008554',
    primary150: '#003924',
    primaryDark: '#006c44',
    secondary: '#da459c',
    secondaryDark: '#d63091',
    inverse: '#4b4c4e',
    inverseDark: '#3f4041',
    tertiary: '#2274a5',
    tertiaryDark: '#1e6590',
    body: '#292929',
    darkGrey: '#58595b',
    lightGrey: '#E6EAEA',
    tickets: '#eac435',
    linkHoverFg: '#2a7dac',
    linkFocusBg: '#54a6d6',
    // Agenda
    aquaRoom: '#01b6ad',
    blueRoom: '#54a6d6',
    greenRoom: '#66ad4a',
    orangeRoom: '#cd9152',
    purpleRoom: '#9e55c0',
    redRoom: '#ad4a54',
    foyerRoom: '#dd4876',
    yellowRoom: '#e3d800',
    keynoteRoom: '#01b6ad',
    locknoteRoom: '#01b6ad',
    afterpartyRoom: '#dd4876',
    alerts: {
      error: {
        background: '#f2dede',
        border: '#ebccd1',
        color: '#a94442',
      },
      warning: {
        background: '#fcf8e3',
        border: '#faebcc',
        color: '#8a6d3b',
      },
      success: {
        background: '#dff0d8',
        border: '#d6e9c6',
        color: '#3c763d',
      },
      info: {
        background: '#d9edf7',
        border: '#bce8f1',
        color: '#31708f',
      },
    },
  },
  weights: {
    /** Light: 300 */
    light: 300,
    /** Regular: 400 */
    regular: 400,
    /** Medium: 500 */
    medium: 500,
    /** Semi-bold: 600 */
    semiBold: 600,
    /** Bold: 700 */
    bold: 700,
  },
  fonts: {
    main: "'Hind', sans-serif",
    defaultSize: 16,
    sizeSm: 14,
    sizeLg: 18,
    lineHeight: 1.4,
  },
  metrics: {
    /** xs: 4 */
    xs: 4,
    /** sm: 8 */
    sm: 8,
    /** md: 16 */
    md: 16,
    /** lg: 24 */
    lg: 24,
    /** xl: 32 */
    xl: 32,
    /** xxl: 40 */
    xxl: 40,
  },
} as const

export type DDDTheme = typeof theme

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends DDDTheme {}
}
