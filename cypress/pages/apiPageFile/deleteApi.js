class deleteApi{

    deleteRequest() {
        return cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key':'reqres-free-v1'
            },
            failOnStatusCode : true
        }).then((response) => {
            cy.log(response.body)
            expect(response.status).to.eq(204)
        })
    }

}

export default new deleteApi();