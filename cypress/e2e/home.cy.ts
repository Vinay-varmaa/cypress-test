describe('home page', () => {
  beforeEach(()=>{                                         //beforeEach hook
    cy.visit('http://localhost:3000/')
  })
 

  context('Home page',()=>{

    it("the h1 contains the correct text", () => {
      cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
    })
    it('the features on the home page are correct',()=>{
      cy.get("dt").eq(0).contains("4 Courses")
      // cy.get("dt").eq(2)
    })
  })

})