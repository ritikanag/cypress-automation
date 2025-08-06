/// <reference types="Cypress" />

const deleteApi  = require("../../pages/apiPageFile/deleteApi");

describe('reqres api tests', () => {

  it('create a new user using faker', () => {
    deleteApi.deleteRequest()
  })

})