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
    // cy.url().should('contain', 'onboarding/dashboard');        
})