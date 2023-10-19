/// <reference types="Cypress" />

const deleteApi  = require("../../support/apiPageFile/putAPI");

describe('reqres api tests', () => {

  it('create a new user using faker', () => {
    deleteApi.deleteRequest()
  })

})