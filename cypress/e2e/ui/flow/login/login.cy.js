/// <reference types='Cypress' />

const loginData = require("../../../../fixtures/ui/login.json")
const login_Data = require("../../../../fixtures/ui/login1.json")
import { loginPage } from '../../../../support/uiPageFile/login/loginPage';
const login = new loginPage();

describe('Swag Labs Demo Page Login using JSON fixture file', function () 
{
  before(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      return false;
     });
  });

  it('login using custom method and fixture json with array of field objects', () => {
    login.fillAndValidateField(loginData.login_data.locked_user,false)
  })
  
  it('login using loaded fixture and passing object key as string', () => {
    cy.get('.login_logo').should('be.visible');
    cy.login("standard_user")
  })

  it('login using imported fixture file where is it not loaded and by passing object with username and password', () => {
    cy.loginWithCredentials(login_Data.standard_user)
  })

})