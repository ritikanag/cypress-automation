/// <reference types="Cypress" />

const api  = require("../../support/apiPageFile/getApi");
const getJsonDta = require("../../fixtures/get.json")

describe('reqres api tests', () => {

  it('get the list of users', () => {
    api.getListUsers()
  })

  it('get single user', () => {
    api.getSingleUser()
  })

})