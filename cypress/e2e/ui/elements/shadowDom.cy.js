/// <reference types='Cypress' />

describe("testing shadow DOM in a given wensite", ()=>{
    it("test shadow dom", ()=> {
        cy.visit("https://practice.expandtesting.com/")
        //clicking on the shadow dom button
        cy.get('a[href="/shadowdom"].btn').click()
        cy.get("#shadow-host").shadow().find("#my-btn").click()
    })
})