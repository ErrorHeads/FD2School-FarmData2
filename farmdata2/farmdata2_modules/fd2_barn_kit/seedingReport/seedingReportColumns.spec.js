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

    it('should display correct columns when Tray Seedings is selected', () => {


        cy.get('[data-cy="seeding-type-dropdown"]')
          .should('exist')
          .and('be.visible');
    
        
        cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]')
         .select('Tray Seedings')

        cy.get('[data-cy=selectAll-checkbox]').should('be.visible') 
        cy.get('[data-cy=edit-header]').should('exist')

        
        
        
    
        
        
    
        
        
            
            cy.get('[data-cy="report-table"]').within(() => {
              const expectedColumns = [
                'Date',
                'Crop',
                'Area',
                'Seeds',
                'Trays',
                'Cells/Tray',
                'Workers',
                'Hours',
                'Varieties',
                'Comments',
                'User',
              ];
        
              expectedColumns.forEach((columnName) => {
                cy.get('th').contains(columnName).should('be.visible');
              });
            });
          });
        });





  

       



  
  




