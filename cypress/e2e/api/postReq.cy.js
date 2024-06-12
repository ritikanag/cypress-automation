/// <reference types="Cypress" />

const postApi  = require("../../support/apiPageFile/postAPI");

describe('reqres api tests', () => {

  it.only('create a new user using faker', () => {
    postApi.createUser()
  })

  it.only('creating a user by reading json from fixtures', () => {
    postApi.createUserUsingFixture()
  })

})