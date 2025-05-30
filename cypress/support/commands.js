// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 
import { loginPage  } from './uiPageFile/login/loginPage'
const login = new loginPage ();
//import neatCSV from 'neat-csv';
const neatCSV = require('neat-csv');

Cypress.Commands.add('login', (user = "standard_user") => {
    //TODO move this functionality to module file
    if (typeof user === 'string') {
        cy.fixture('ui/login1').as('logins')
        cy.get('@logins').then((data) => {
            login.loginWithUsernameAndPassword(data[user].username, data[user].password)
        })
    } else {
        login.loginWithUsernameAndPassword(user.username, user.password)
        
    }

})

Cypress.Commands.add('loginWithCredentials',(user)=>{
    cy.get('#user-name').clear().type(user.username);
    cy.get('#password').clear().type(user.password);
    cy.get('#login-button').click({ force: true })      
})

Cypress.Commands.add('loginFromCSV', () => {
    cy.readFile('cypress/fixtures/ui/login.csv')
      .then(neatCSV)
      .then((users) => {
        const user = users[0]; // or filter by username if needed
        cy.log(`Logging in with: ${user.username}, ${user.password}`);
        cy.get('#user-name').clear().type(user.username);
        cy.get('#password').clear().type(user.password);
        cy.get('#login-button').click();
      });
  });