class addProductPage{

    productName = 'div[class=inventory_item_name]'
    secondProduct = 'input[data-test="password"]'
    
    addFirstProduct() {
        return cy.get(this.productName);
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

export default new addProductPage();