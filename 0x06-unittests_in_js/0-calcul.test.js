#!/usr/bin/node
const assert = require("assert");
const calculateNumber = require("./0-calcul");
describe("calculateNumber", function () {
  it("should return 5 when the args are 1.7 and  2.8", function () {
    assert.equal(calculateNumber(1.7, 2.8), 5);
  });
});

describe("calculateNumber", function () {
  it("should return 4 when the args are 1.2 and  2.8", function () {
    assert.equal(calculateNumber(1.2, 2.8), 4);
  });
});

describe("calculateNumber", function () {
  it("should return 4 when the args are 1.7 and  2.1", function () {
    assert.equal(calculateNumber(1.7, 2.1), 4);
  });
});

describe("calculateNumber", function () {
  it("should return 3 when the args are 1.2 and  2.1", function () {
    assert.equal(calculateNumber(1.2, 2.1), 3);
  });
});
