const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", () => {
  it("should assert true to be true", () => {
    expect(true).to.be.true;
  });

  it("should spy on a function using sinon", () => {
    const spy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith("SUM", 100, 10)).to.be.true;
  });
});
