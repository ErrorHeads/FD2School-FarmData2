describe('Test', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-example/ui')
    })

    it("Default", () => {
        
    })
})