//const csv = require('neat-csv')
const csv = require('neat-csv')
const loginData = require("../../../fixtures/ui/login.csv")


let regData
class loginPage{

    username = 'input[data-test="username"]'
    password = 'input[data-test="password"]'
    loginButton = '.btn_action'

    enterUserName() {
        return cy.get(this.username);
    }

    enterPassword(){
        return cy.get(this.password)
    }

    clickLoginBtn(){
        return cy.get(this.loginButton).click()
    }

    login(){
        cy.fixture(login.csv).then(csv).then((data) => {
            regData = data
            cy.log(data.username)

            for (let i = 0; i < regData.length; i++){
            
                this.enterUserName().clear().type(regData[i].username)
                this.enterPassword().clear().type(regData[i].password)
                this.clickLoginBtn()
            }  
        })
        
    }
    
}

export default new loginPage();















    // login(uname, pswrd){
    //     this.enterUserName().clear().type(uname)
    //     this.enterPassword().clear().type(pswrd)
    //     this.clickLoginBtn()
    // }