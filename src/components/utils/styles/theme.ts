import styled, { CreateStyled } from '@emotion/styled-base'

/* tslint:disable object-literal-sort-keys */

export const theme = {
  colors: {
    primary: '#16a5a6',
    primaryDark: '#3d5567',
    secondary: '#F08712',
    secondaryDark: '#F35E29',
    inverse: '#4b4c4e',
    inverseDark: '#3f4041',
    tertiary: '#BBDEF1',
    tertiaryDark: '#BBDEF1',
    body: '#292929',
    darkGrey: '#58595b',
    agenda: '#7BB8DA',
    lightGrey: '#f0f0f4',
    tickets: '#efca06',
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
  },
  weights: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  fonts: {
    main: "'Open Sans', Arial, sans-serif",
    // this is hopefully temporary while we return to 16px as the top font
    insaneBootstrapDefault: 10,
    defaultSize: 16,
    sizeSm: 14,
  },
}

export type Theme = typeof theme

export default styled as CreateStyled<Theme>
