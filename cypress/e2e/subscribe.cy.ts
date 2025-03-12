describe('NewsLetter subscribe form',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    it("allows the user to subscribe to the email list", () => {
        cy.getByData("email-input").type("tom@aol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains('tom@aol.com')
    })

    it('Invalid Email',()=>{
        cy.getByData("email-input").type("tam")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })
    it("Already Existing user",()=>{
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    // context('Course',()=>{
    //     it.only('Test your first application',()=>{
    //         cy.getByData('course-0').find('a').eq(3).click()
    //         cy.pathname("/expectedpathname")
    //     })
    // })
    context('Course', () => {
        it.only('Test your first application', () => {
            cy.getByData('course-0').find('a').eq(3).click();
            cy.pathname("/testing-your-first-application"); // Use the custom command
        });
    });
    
})