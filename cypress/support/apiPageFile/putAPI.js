class putApi{

    putRequest() {
        return cy.request({
            method: 'PUT',
            url: '/api/users/2',
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