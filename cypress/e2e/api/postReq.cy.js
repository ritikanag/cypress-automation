/// <reference types="Cypress" />

const postApi  = require("../../pages/apiPageFile/postAPI");

describe('reqres api tests', () => {

  it('create a new user using faker', () => {
    postApi.createUser()
  })

  it('creating a user by reading json from fixtures', () => {
    postApi.createUserUsingFixture()
  })

})