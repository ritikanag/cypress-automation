// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
Cypress.on('uncaught:exception', (_err, _runnable) => {
    return false;
   });

// Alternatively you can use CommonJS syntax:
// require('./commands')

const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()
// # run only the tests with "auth user" in the title
// $ npx cypress run --env grep="auth user"
// # run tests with "hello" or "auth user" in their titles
// # by separating them with ";" character
// $ npx cypress run --env grep="hello; auth user"
// # run tests tagged @fast
// $ npx cypress run --env grepTags=@fast
// # run only the tests tagged "smoke"
// # that have "login" in their titles
// $ npx cypress run --env grep=login,grepTags=smoke
// # only run the specs that have any tests with "user" in their titles
// $ npx cypress run --env grep=user,grepFilterSpecs=true
// # only run the specs that have any tests tagged "@smoke"
// $ npx cypress run --env grepTags=@smoke,grepFilterSpecs=true
// # run only tests that do not have any tags
// # and are not inside suites that have any tags
// $ npx cypress run --env grepUntagged=true

import 'cypress-mochawesome-reporter/register';
