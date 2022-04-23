// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

/// <reference types="cypress" />

export type ConferenceStates =
  | 'preCfp'
  | 'cfpOpen'
  | 'votingOpen'
  | 'votingClosed'
  | 'agendaPublished'
  | 'onTheDay'
  | 'conferenceOver'
  | 'ticketsSoldOut'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to open the main menu
       * @example cy.openMenu()
       */
      openMenu(): void
      /**
       * Custom command to change the conference using the TestingControl
       * @example cy.setConference('preCfp')
       */
      setConference(state: ConferenceStates)
    }
  }
}

import '@testing-library/cypress/add-commands'

// Import commands.js using ES2015 syntax:
import './commands'
