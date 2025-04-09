/// <reference types='Cypress' />

// const cypressConfig = require("../../../../cypress.config");
const loginData = require("../../../../fixtures/ui/login.json")
const login_Data = require("../../../../fixtures/ui/login1.json")
// const loginPage = require("../../../../support/uiPageFile/login/loginPage")
import { loginPage } from '../../../../support/uiPageFile/login/loginPage';
const login = new loginPage();
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

  it('passes', () => {
    // loginPage.login(loginData.username, loginData.password)
    login.fillAndValidateField(loginData.login_data.locked_user,false)
  })
  
  it.skip('passes valid credentials', () => {
    cy.get('.login_logo').should('be.visible');
    //loginPage.fillAndValidateField(loginData.valid_user, false);
    // loginPage.enterUserName(loginData.valid_user, false)
    // loginPage.enterPassword(loginData.valid_user, false)
    cy.login("standard_user")
  })

  it.skip('check login functionality', () => {
    cy.loginWithCredentials(login_Data.standard_user)
  })

})