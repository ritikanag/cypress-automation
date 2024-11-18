/// <reference types='Cypress' />

// const cypressConfig = require("../../../../cypress.config");
const loginData = require("../../../../fixtures/ui/login.json")
const loginPage = require("../../../../support/uiPageFile/login/loginPage")
//const csv = require('neat-csv')

describe('Swag Labs Demo Page Login', function () 
{

  before(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    //cy.visit(Cypress.env("baseUrlUi"))
    // cy.fixture(login.json).then((data) => {
    //     regData = data
    // })
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      return false;
     });
  });

  it.skip('passes', () => {
    loginPage.login(loginData.username, loginData.password)
  })
  
  it('passes valid credentials', () => {
    cy.get('.login_logo').should('be.visible');
    //loginPage.fillAndValidateField(loginData.valid_user, false);
    loginPage.enterUserName(loginData.valid_user, false)
    loginPage.enterPassword(loginData.valid_user, false)
  })

})