const { expect } = require("chai");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", () => {
  const spy = sinon.spy(console, "log");

beforeEach(() => {
  sinon.reset();
});

afterEach(() => {
});
  it("should spy on a function using sinon", () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith("The total is: 120")).to.be.true;
  });
  it("should spy on a function using sinon", () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith("The total is: 20")).to.be.true;
  });
});
