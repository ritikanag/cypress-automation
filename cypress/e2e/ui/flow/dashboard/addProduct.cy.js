/// <reference types='Cypress' />
import addProductPage from "../../../../support/uiPageFile/dashboard/addProductPage"
import { loginPage } from "../../../../support/uiPageFile/login/loginPage"

describe('Adding multiple products to the cart', ()=>{

    before(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.login("standard_user")
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      return false;
      });
    });

    it('verify products to be available in the homepage', ()=>{
        addProductPage.checkAllProducts().should('be.visible')
    })
})