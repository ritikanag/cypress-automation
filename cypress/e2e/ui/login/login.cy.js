/// <reference types="Cypress" />

const cypressConfig = require("../../../../cypress.config");
const loginPage  = require("../../../support/uiPageFile/login/loginPage");
const loginData = require("../../../fixtures/ui/login.csv")
//const csv = require('neat-csv')

describe('Swag Labs Demo Page Login', () => {

  before(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    //cy.visit(Cypress.env("baseUrlUi"))
    cy.fixture(login.csv).then((data) => {
        regData = data
    })

  });

  it.skip('passes', () => {
    loginPage.login(loginData.username, loginData.password)
  })

  it.only('passes valid credentials', () => {
    loginPage.login()
  })

})