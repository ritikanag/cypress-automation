class deleteApi{

    headers ={
        'content-type': 'application/json',
        'x-api-key':Cypress.env('apiKey')
    }

    deleteRequest() {
        return cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            headers: this.headers,
            failOnStatusCode : true
        }).then((response) => {
            cy.log(response.body)
            expect(response.status).to.eq(204)
        })
    }

}

export default new deleteApi();