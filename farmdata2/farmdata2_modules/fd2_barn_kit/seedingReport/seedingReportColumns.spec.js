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

    it("Check that the proper columns are displayed when 'All' is selected", () => {
        cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]')
            .should('have.value','All')
        
        cy.get('[data-cy=selectAll-checkbox]')
            .should('be.visible')

        // h0 - h13 relate to tableColumns[1] - tableColumns[14] in seedingReport.html
        for(let h = 0; h < 14; h++){
            if (h < 4 || h > 9){
                cy.get('[data-cy=h' + h)
                    .should('be.visible')
            } else {
                cy.get('[data-cy=h' + h)
                    .should('not.exist')
            }
            
        }
    })

    it("Niloy: 2nd test (Replace Later)", () => {

    })

    it("Ifrad: 3rd test (Replace Later)", () => {

    })
})