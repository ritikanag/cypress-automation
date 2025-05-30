class calendar {

    usernameLocator = '#txt-username'
    passwordLocator = '#txt-password'
    loginButtonLocator ='#btn-login'
    makeAppointmentButton = '#btn-make-appointment'
    username = 'John Doe'
    password = 'ThisIsNotAPassword'
    monthValue = "Jul";
    dateValue = "15";
    yearValue = "2027";
    commentText = "lorem ipsum dolor sit amet";

    clickMakeNewAppointmentButton() {
        return cy.get(this.makeAppointmentButton).click();
    }
    
    enterUsername(){
        return cy.get(this.usernameLocator).type(this.username)
    }

    enterPassword(){
        return cy.get(this.passwordLocator).type(this.password)
    }

    clickLogin(){
        return cy.get(this.loginButtonLocator).click();
    }

    login(){
        this.enterUsername();
        this.enterPassword();
        this.clickLogin();
    }

    makeAppointmentFlow(){
        this.selectFacility()
        this.selectHealthcareProgram()
        this.visitDate()
        this.addComment()
        this.bookAppointmentButton()
    }

    selectFacility(){
        cy.get('select').select('Hongkong CURA Healthcare Center').should('have.value','Hongkong CURA Healthcare Center')

        //clicking checkbox
        cy.get('#chk_hospotal_readmission').check().should('be.checked').and('have.value','Yes')
    }
    selectHealthcareProgram(){
        cy.get('[value="Medicaid"]').check().should('be.checked')
    }
    visitDate(){
        //click on the date field
        cy.get("#txt_visit_date").click();
        //click on the year 2024
        cy.get("div[class='datepicker-days'] th[class='datepicker-switch']").click( { delay: 100 });
        cy.get("div[class='datepicker-days'] th[class='datepicker-switch']").click({force: true}, { delay: 100 });
        //click on 2024 again to select any other desired year
        cy.get("span[class='year']").contains(this.yearValue).click();
        cy.get("span[class='month']").contains(this.monthValue).click();
        cy.get("td[class='day']").contains(this.dateValue).click();
        cy.get("#txt_comment").click( {force: true})
    }
    addComment(){
        cy.get("#txt_comment").type(`${this.commentText}`);
    }
    bookAppointmentButton(){
        cy.get("#btn-book-appointment").click();
    }

}

    export default new calendar();