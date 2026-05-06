/// <reference types='Cypress' />
import addProductPage from "../../../../pages/uiPageFile/dashboard/addProductPage"

describe('Adding multiple products to the cart', ()=>{

    before(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.login("standard_user")
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      return false;
      });
    });

    // it('verify products to be available in the homepage', ()=>{
    //     addProductPage.checkAllProducts().should('be.visible')
    // })

    it('adding products to the cart', ()=>{
        addProductPage.checkAllProducts().should('be.visible')
        cy.get('.inventory_item').should('exist');
        addProductPage.addingAllProducts()
    })

})