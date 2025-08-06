class addProductPage{

    productsToBeAdded = ['Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Backpack',
        'Sauce Labs Onesie',
        'Test.allTheThings() T-Shirt (Red)']

    allProducts = '.inventory_item_name '


    checkAllProducts(){
        return cy.get(this.allProducts)
    }
    
    addProductIndividually(productName) {
        cy.get('.inventory_item').each(($el) => {
            cy.wrap($el).find('.inventory_item_name').then(($name) => {
            const nameText = $name.text().trim();
            if (nameText === productName) {
                cy.wrap($el).find('button').click();
            }
            });
        });
    }

    addingAllProducts(){
        this.productsToBeAdded.forEach((product) => {
            this.addProductIndividually(product)
        })
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