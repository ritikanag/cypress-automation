/// <reference types="Cypress" />

describe('Swag Labs Demo Page Login Using CSV fixture file', () => {

  before(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      return false;
     });
  })

  it('login using fixture csv', () => {
    cy.loginFromCSV();
  })

})