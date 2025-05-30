//const csv = require('neat-csv')
//const csv = require('neat-csv')
//const loginData = require("../../../fixtures/ui/login.csv")


//let regData
export class loginPage{

    enterUsername(username) {
        return cy.get('#user-name').clear().type(username);
    }

    enterPassword(password){
        return cy.get('#password').clear().type(password)
    }

    clickLoginBtn(){
        return cy.get('#login-button').click()
    }

    loginWithUsernameAndPassword(username,password){
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginBtn({force:true});
    }

    fillAndValidateField = (fields, isFormValidation) => {
        fields.forEach((field) => {
            if (isFormValidation && field.input !== "dropdown") {
                cy.get(field.locator).focus().blur();
                cy.get('body').focus();
                cy.get('.text-danger').contains(field.error_message).should('include.text', field.error_message);
            } else {
                if (field.input === "dropdown") {
                    this.fillDropdownValue(field.locator, field.valid);
                } else {
                    if (field.valid.includes("generateUserEmail()"))
                        cy.get(field.locator).type(eval(field.valid));
                    else
                        cy.get(field.locator).type(field.valid);
                }
            }
        })
    }

    fillDropdownValue = (locator, value) => {
        cy.get(locator).click();
        cy.get('.ng-option-label').contains(value).click();
    }

    getRandomNumber = (field) => {
        if (field.isUnique) {
            return Math.floor(Math.random() * 999);
        } else {
            return "";
        }
    }

}