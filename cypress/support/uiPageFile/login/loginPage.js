//const csv = require('neat-csv')
//const csv = require('neat-csv')
//const loginData = require("../../../fixtures/ui/login.csv")


//let regData
class loginPage{

    username = 'input[data-test="username"]'
    password = 'input[data-test="password"]'
    loginButton = '.btn_action'

    enterUserName(uname) {
        return cy.get(this.username);
    }

    enterPassword(pswd){
        return cy.get(this.password)
    }

    clickLoginBtn(){
        return cy.get(this.loginButton).click()
    }

    fillAndValidateField = (fields, isFormValidation) => {
        fields.forEach((field) => {
            if (isFormValidation && field.input !== "dropdown") {
                cy.get(field.locator).focus().blur();
                cy.get('body').focus();
                cy.get('.error-button').contains(field.error_message).should('include.text', field.error_message);
            } else {
                if (field.input === "dropdown") {
                    this.fillDropdownValue(field.locator, field.valid);
                } else {
                    if (field.valid.includes("generateUserEmail()"))
                        cy.get(field.locator).type(eval(field.valid));
                    else
                        cy.get(field.locator).type(field.valid + this.getRandomNumber(field));
                }
            }
        })
    }

    

    // login(){
    //     cy.fixture(login.csv).then(csv).then((data) => {
    //         regData = data
    //         cy.log(data.username)

    //         for (let i = 0; i < regData.length; i++){
            
    //             this.enterUserName().clear().type(regData[i].username)
    //             this.enterPassword().clear().type(regData[i].password)
    //             this.clickLoginBtn()
    //         }  
    //     })
        
    // }
    
}

export default new loginPage();

    // login(uname, pswrd){
    //     this.enterUserName().clear().type(uname)
    //     this.enterPassword().clear().type(pswrd)
    //     this.clickLoginBtn()
    // }