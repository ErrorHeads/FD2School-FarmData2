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

    it("Niloy: 2nd test (Replace Later)", () => {

    })

    it("Ifrad: 3rd test (Replace Later)", () => {

    })
})