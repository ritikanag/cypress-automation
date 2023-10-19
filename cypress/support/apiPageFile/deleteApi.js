class deleteApi{

    deleteRequest() {
        return cy.request({
            method: 'DELETE',
            url: '/api/users/2',
            failOnStatusCode : true
        }).then((response) => {
            cy.log(response.body)
            expect(response.status).to.eq(204)
        })
    }

}

export default new deleteApi();