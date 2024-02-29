const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", () => {
  it("should assert true to be true", () => {
    expect(true).to.be.true;
  });

  it("should spy and stub on a function using sinon", () => {
    const stub = sinon.stub(Utils, "calculateNumber");
    const spy = sinon.spy(console,'log');
    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith("SUM", 100, 20)).to.be.true;
    expect(spy.withArgs("The total is: 10"));
  });
});
