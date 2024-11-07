/**
 * 
 */

describe('Test the default contents of the "Seeding Type" section of the Seeding Input Form in the FieldKit.', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-field-kit/seedingInput')
    })

    it('Check that there is an element for Tray and Direct and that they are enabled', () => {
        cy.get("[data-cy=tray-seedings]")
            .should("be.enabled")
        cy.get("[data-cy=direct-seedings]")
            .should("be.enabled")
        
    })

    it('Check that neither the Tray or Direct elements are selected, and that the message indicating one but be selected is visible', () => {

    })

    it('Check that neither form elements for the Tray and Direct seedings are visible', () => {

    })


})
