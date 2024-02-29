#!/usr/bin/node
const { expect } = require("chai");
const sinon = require("sinon");
const getPaymentTokenFromAPI = require("./6-payment_token");
describe("getPaymentTokenFromAPI", function () {
  it("test promise", function (done) {
    getPaymentTokenFromAPI(true)
    .then(data => {
      expect(data).to.equal({ data: "Successful response from the API" });
    });
    done();
  });
});
