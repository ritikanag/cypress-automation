/// <reference types="Cypress" />

const putApi  = require("../../pages/apiPageFile/putAPI");

describe('reqres api tests', () => {

  it('create a new user using faker', () => {
    putApi.putRequest()
  })

})