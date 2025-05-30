class api{

    getListUsers() {
        return cy.request({
            method: 'GET',
            url: '/api/users?page=2',
            failOnStatusCode : true
        }).then((response) => {
            cy.log(response.body)
            cy.writeFile('cypress/fixtures/get1.json', response.body)
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
            expect(response.body.data[0]).to.include.keys([
                'id',
                'email',
                'first_name',
                'last_name',
                'avatar'
            ])
            expect(response.body.data[0].id).to.eq(7)
        })
    }

    getSingleUser(){
        return cy.request({
            method: 'GET',
            url: '/api/users/2',
            failOnStatusCode : true
        }).then((response) => {
            cy.log(response.body)
            expect(response.status).to.eq(200)
            expect(response.body).to.be.not.null
            expect(response.body).to.include.keys([
                'data',
                'support'
            ])
            expect(response.body.data).to.include.keys([
                'id',
                'email',
                'first_name',
                'last_name',
                'avatar'
            ])
        })
    }
}

export default new api();