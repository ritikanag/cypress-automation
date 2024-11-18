/// <reference types='Cypress' />

const calendar = require("../../../support/elementsPageFile/calendar")

describe('Calendar Test', function () {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (_err, _runnable) => {
            return false;
        });
        cy.log("Running - before each");
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
    })

    it('Make appointment flow: includes different elements', () => {
        //covers radio button, checkbox, static dropdown, calendar control
        calendar.clickMakeNewAppointmentButton()
        calendar.login()
        calendar.makeAppointmentFlow()

    })

})