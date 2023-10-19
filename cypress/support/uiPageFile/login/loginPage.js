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

    login(uname, pswrd){
        this.enterUserName().clear().type(uname)
        this.enterPassword().clear().type(pswrd)
        this.clickLoginBtn()
    }

}

export default new loginPage();