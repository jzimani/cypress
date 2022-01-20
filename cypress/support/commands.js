Cypress.Commands.add('openWebsite', () => {
    cy.visit('/')
})

Cypress.Commands.add('redirectToPonukaSluzieb', () => {
    cy.get('.menu-collapse > .u-button-style')
        .click()
    cy.get('#menu-menu-2 > .menu-item-276 > .u-button-style')
        .click()
})

Cypress.Commands.add('sendMessage', () => {
    cy.get('#name-6797')
            .type(Cypress.env('name'))
        cy.get('#email-6797')
            .type(Cypress.env('email'))
        cy.get('#message-6797')
            .type(Cypress.env('message'))
        cy.get('.u-align-left > .u-border-none')
            .click()
})