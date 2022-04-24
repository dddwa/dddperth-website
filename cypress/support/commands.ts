// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands

import { ConferenceStates } from '.'

Cypress.Commands.add('openMenu', () => {
  cy.findByRole('button', { name: /menu/i }).click()
})

Cypress.Commands.add('setConference', (conferenceState) => {
  const stateMap: Record<ConferenceStates, RegExp> = {
    preCfp: /pre-cfp/i,
    cfpOpen: /cfp open/i,
    votingOpen: /voting open/i,
    votingClosed: /voting closed/i,
    agendaPublished: /agenda published/i,
    onTheDay: /on the day/i,
    conferenceOver: /conference over/i,
    ticketsSoldOut: /sold out/i,
  }

  cy.findByRole('button', { name: /show/i }).click()
  cy.findByRole('button', { name: stateMap[conferenceState] }).click()
  cy.findByRole('button', { name: /hide/i }).click()
})
