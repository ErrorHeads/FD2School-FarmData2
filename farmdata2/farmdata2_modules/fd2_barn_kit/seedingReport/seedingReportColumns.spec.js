/**
 * This spec is designed to create a seeding report table and
 * check that the columns of that table are properly populated.
 */
describe('Test the columns of the seeding report table by seeding type', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/seedingReport')
        cy.waitForPage()
        cy.get('[data-cy=date-range-selection]')
            .should('exist')
        cy.get('[data-cy=start-date-select]')
            .should('exist')
            .type('2020-01-01')
        cy.get('[data-cy=end-date-select]')
            .should('exist')
            .type('2020-02-15')
        cy.get('[data-cy=generate-rpt-btn]')
            .click()
        cy.waitForPage()
    })

    it("Fox: 1st test (Replace Later)", () => {

    })
    it("verifies correct columns are displayed for Direct Seedings", () => {
        // Select Direct Seedings from the dropdown
        cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]')
            .select('Direct Seedings')
            .should('have.value', 'Direct Seedings')
    
        // Verify column headers exist and are in correct order
        cy.get('[data-cy=h0]')
            .should('have.text', 'Date')
        cy.get('[data-cy=h1]')
            .should('have.text', 'Crop')
        cy.get('[data-cy=h2]')
            .should('have.text', 'Area')
        cy.get('[data-cy=h3]')
            .should('have.text', 'Seeding')
        cy.get('[data-cy=h4]')
            .should('have.text', 'Row Feet')
        cy.get('[data-cy=h5]')
            .should('have.text', 'Bed Feet')
        cy.get('[data-cy=h6]')
            .should('have.text', 'Rows/Bed')
        cy.get('[data-cy=h7]')
            .should('not.exist')
        cy.get('[data-cy=h8]')
            .should('not.exist')
        cy.get('[data-cy=h9]')
            .should('not.exist')
        cy.get('[data-cy=h10]')
            .should('have.text', 'Workers')
        cy.get('[data-cy=h11]')
            .should('have.text', 'Hours')
        cy.get('[data-cy=h12]')
            .should('have.text', 'Varieties')
        cy.get('[data-cy=h13]')
            .should('have.text', 'Comments')
        cy.get('[data-cy=h14]')
            .should('have.text', 'User')
    
        // Verify edit header exists
        cy.get('[data-cy=edit-header]')
            .should('have.text', 'Edit')
    
    })
  

    it("Ifrad: 3rd test (Replace Later)", () => {

    })
})