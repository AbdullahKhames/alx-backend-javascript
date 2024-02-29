#!/usr/bin/node
const { expect } = require("chai");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", () => {
  it("should return a Promise", () => {
    const result = getPaymentTokenFromAPI(true);
    expect(result).to.be.an.instanceof(Promise);
  });

  it("should resolve with a data object when true", (done) => {
    getPaymentTokenFromAPI(true).then((data) => {
      expect(data).to.be.an("object");
      expect(data).to.have.property("data");
      done();
    });
  });

  it("should resolve with the correct content", (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.deep.equal({ data: "Successful response from the API" });
    });
    done();
  });
});
