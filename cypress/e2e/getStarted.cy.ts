describe('course get started',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    context('Course', () => {
        it('Test your first application', () => {
            cy.getByData('course-0').find('a').eq(3).click();
            cy.pathname("/testing-your-first-application"); // Use the custom command
        })
    })
    context('cypress fundamentals',()=>{
        it('Start cypress fundamentals',()=>{
            cy.getByData('course-2').find('a').eq(3).click();
            cy.pathname("/cypress-fundamentals")

        })
    })  
})
    