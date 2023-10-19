/// <reference types="Cypress" />

const loginPage  = require("../../../support/uiPageFile/login/loginPage");
const loginData = require("../../../fixtures/login.json")

describe('Swag Labs Demo Page Login', () => {

  before(() => {
    cy.visit('https://www.saucedemo.com/v1/');
  });

  it('passes', () => {
    loginPage.login(loginData.username, loginData.password)
  })


})