/// <reference types="Cypress" />

const putApi  = require("../../support/apiPageFile/putAPI");

describe('reqres api tests', () => {

  it('create a new user using faker', () => {
    putApi.putRequest()
  })

})