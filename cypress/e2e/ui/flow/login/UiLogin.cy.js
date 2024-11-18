/// <reference types="Cypress" />

const loginPage  = require("../../../../support/uiPageFile/login/loginPage");
const loginData = require("../../../../fixtures/ui/login.csv")
const csv = require('neat-csv')


let regData
describe('Swag Labs Demo Page Login', () => {

  before(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      return false;
     });
    cy.fixture(login.csv).then(csv).then((data) => {
      regData = data
      cy.log(data.username)
  })

  });

  it('passes valid credentials', () => {
    loginPage.login(loginData.username,loginData.password)
  })

})