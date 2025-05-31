class addProductPage{

    productName = 'div[class=inventory_item_name]'
    secondProduct = 'Sauce Labs Bike Light'
    thirdProduct = 'Sauce Labs Bolt T-Shirt'
    allProducts = 'inventory_item'


    checkAllProducts(){
        return cy.get(this.allProducts)
    }
    
    addFirstProduct() {
        return cy.get(this.productName);
    }

    addSecondProduct() {
        return cy.contains(this.secondProduct);
    }

    addThirdProduct() {
        return cy.get(this.thirdProduct);
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