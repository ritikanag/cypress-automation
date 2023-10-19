import { faker } from '@faker-js/faker'

class postApi{

    createUser() {
        return cy.request({
            method: 'POST',
            url: '/api/users',
            body: {
                // name: "ritika",
                // job: "qa"
                name: faker.person.fullName(),
                job: faker.person.jobTitle()
            },
            failOnStatusCode : true
        }).then((response) => {
            cy.log(response.body)

            // cy.readFile('cypress/fixtures/postReqResp.json').then((data) => {
            //     cy.writeFile('cypress/fixtures/postReqResp.json', data)
            // })
            // , { flag: 'a+' }
            cy.writeFile('cypress/fixtures/postReqResp.json', response.body)
            expect(response.status).to.eq(201)
            expect(response.body).to.be.not.null
            expect(response.body).to.include.keys([
                'name',
                'job',
                'id',
                'createdAt'
            ])
        })
    }


    createUserUsingFixture() {
        cy.fixture('postReqBody').then((data)=>{
            const requestBody=data;
            cy.request({
                method: 'POST',
                url: '/api/users',
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