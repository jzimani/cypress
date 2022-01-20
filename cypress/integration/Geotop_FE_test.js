describe('Geotop home webpage & redirection', () => {

    beforeEach(() => {
        cy.openWebsite()
    })

    it('webpage is opened successfully', () => {
        cy.get('.u-align-left > .u-container-layout > .u-custom-font')
            .should('have.text', 'Geotop Košice​, s.r.o.')
    })

    it('user is redirected successfully', () => {
        cy.redirectToPonukaSluzieb()
        cy.get('#carousel_ceea > .u-clearfix > .u-text')
            .should('have.text', 'Ponuka služieb')
    })

    it('user is redirected back to home page after clicking on the logo', () => {
        cy.redirectToPonukaSluzieb()
        cy.get('.u-logo-image')
            .click()
        cy.get('.u-align-left > .u-container-layout > .u-custom-font')
            .should('have.text', 'Geotop Košice​, s.r.o.')
    })
})

describe('Cookies popup is closed', () => {

    before(() => {
        cy.openWebsite()
    })

    it('form is sent successfully', () => {
        cy.get('#cn-accept-cookie')
            .click()
        cy.get('#cn-notice-text')
            .should('not.be.visible')
    })
})

describe('Contact form not sent successfully', () => {
    before(() => {
        cy.openWebsite()
    })  

    it('slides should be changing', () => {
        cy.get('.menu-collapse > .u-button-style')
            .click()
        cy.get('#menu-menu-2 > .menu-item-278 > .u-button-style')
            .click()
        cy.sendMessage()
        cy.get('.u-form-send-error')
            .should('have.text', 'Unable to send your message. Please fix errors then try again.')

    })
})

describe('Slideshow functionality', () => {
    before(() => {
        cy.openWebsite()
    })  

    it('slides should be changing', () => {
        cy.get('.u-section-3-3 > .u-clearfix > .u-large-text')
            .should('have.text', 'Samozrejmosťou pri všetkých druhoch prác je odborné poradenstvo zadarmo')
        cy.wait(2000)
        cy.get('.u-section-3-3 > .u-clearfix > .u-large-text')
            .should('not.be.visible')
    })
})