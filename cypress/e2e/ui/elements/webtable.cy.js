/// <reference types='Cypress' />

describe('retrieving a value from the webtable', function(){

    it('retrieve webtable value', function(){
        cy.visit('https://practice.expandtesting.com/')
        cy.get('a[href="/dynamic-table"].btn').contains('Try it out').click()
    })

})