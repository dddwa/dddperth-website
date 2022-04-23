describe('CFP Integration tests', () => {
  it('Correctly handles the date', () => {
    cy.visit('/')
    cy.setConference('preCfp')
    cy.openMenu()

    // Asset that we're unable to access the CFP
    cy.findByRole('link', { name: 'CFP' }).should('not.exist')
    cy.visit('/cfp')
    cy.url().should('eq', 'http://localhost:3000/')

    // Open the CFP
    cy.setConference('cfpOpen')
    cy.openMenu()

    // Asset that we're able to access the CFP
    cy.findByRole('link', { name: 'CFP' }).should('exist')
    cy.visit('/cfp')
    cy.url().should('eq', 'http://localhost:3000/cfp')
  })
})
