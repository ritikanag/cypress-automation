import { faker } from '@faker-js/faker'

class postApi{

    headers ={
        'content-type': 'application/json',
        'x-api-key':Cypress.env('apiKey')
    }

    createUser() {
        return cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            headers: this.headers,
            body: {
                // name: "ritika",
                // job: "qa"
                name: faker.person.fullName(),
                job: faker.person.jobTitle()
            },
            failOnStatusCode : true
        }).then((response) => {
            cy.log(response.body)
            cy.readFile('cypress/fixtures/api/postReqResp.json').then((data) => {
                if(Array.isArray(data)){
                    let temp = [...data, response.body]
                    cy.writeFile('cypress/fixtures/api/postReqResp.json', temp)

                }
            });
            // cy.writeFile('cypress/fixtures/postReqResp.json', [response.body], {flag: 'a+'})
            // expect(response.status).to.eq(201)
            // expect(response.body).to.be.not.null
            // expect(response.body).to.include.keys([
            //     'name',
            //     'job',
            //     'id',
            //     'createdAt'
            // ])

            // cy.readFile('cypress/fixtures/postReqResp.json').then((data) => {
            //     cy.writeFile('cypress/fixtures/postReqResp.json', data),
            //     { flag: 'a+' }
            // })
            // , { flag: 'a+' }
        })
    }


    createUserUsingFixture() {
        cy.fixture('api/postReqBody').then((data)=>{
            const requestBody=data;
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                headers: this.headers,
                body: requestBody,
                failOnStatusCode : true
            }).then((response) => {
                cy.log(response.body)
                expect(response.status).to.eq(201)
                expect(response.body).to.be.not.null
                expect(response.body.name).to.eq(requestBody.name)
            })
        })

    }

    
}

export default new postApi();