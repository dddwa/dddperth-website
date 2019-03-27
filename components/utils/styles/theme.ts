import styled, { CreateStyled } from '@emotion/styled-base'

/* tslint:disable object-literal-sort-keys */

export const theme = {
  colors: {
    primary: '#008554',
    body: '#292929',
    darkGrey: '#58595b',
    lightGrey: '#f0f0f4',
    callContent: '#da459c',
    voting: '#2274a5',
    tickets: '#eac435',
    agenda: '#58595b',
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
    defaultSize: 16,
  },
}

export type Theme = typeof theme

export default styled as CreateStyled<Theme>
