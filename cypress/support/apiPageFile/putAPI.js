class putApi{

    putRequest() {
        return cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key':'reqres-free-v1'
            },
            failOnStatusCode : true
        }).then((response) => {
            cy.log(response.body)
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
            expect(response.body).to.include.keys(
                'updatedAt'
            )
        })
    }

}

export default new putApi();