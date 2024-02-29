#!/usr/bin/node
const assert = require("assert");
const calculateNumber = require("./1-calcul");
describe("calculateNumber", function () {
  it("should return 5 when the args are 1.7 and  2.8", function () {
    assert.equal(calculateNumber("SUM", 1.7, 2.8), 5);
  });
});

describe("calculateNumber", function () {
  it("should return 4 when the args are 1.2 and  2.8", function () {
    assert.equal(calculateNumber("SUM", 1.2, 2.8), 4);
  });
});

describe("calculateNumber", function () {
  it("should return 4 when the args are 1.7 and  2.1", function () {
    assert.equal(calculateNumber("SUM", 1.7, 2.1), 4);
  });
});

describe("calculateNumber", function () {
  it("should return 3 when the args are 1.2 and  2.1", function () {
    assert.equal(calculateNumber("SUM", 1.2, 2.1), 3);
  });
});
describe("calculateNumber", function () {
  it("should return 1 when the args are 2.8, 1.7", function () {
    assert.equal(calculateNumber("SUBTRACT", 2.8, 1.7), 1);
  });
});

describe("calculateNumber", function () {
  it("should return 2 when the args are  2.8, 1.2", function () {
    assert.equal(calculateNumber("SUBTRACT", 2.8, 1.2), 2);
  });
});

describe("calculateNumber", function () {
  it("should return 0 when the args are  2.1, 1.7", function () {
    assert.equal(calculateNumber("SUBTRACT", 2.1, 1.7), 0);
  });
});

describe("calculateNumber", function () {
  it("should return 1 when the args are  2.1, 1.2", function () {
    assert.equal(calculateNumber("SUBTRACT", 2.1, 1.2), 1);
  });
});
describe("calculateNumber", function () {
  it("should return 1.5 when the args are 2.8, 1.7", function () {
    assert.equal(calculateNumber("DIVIDE", 2.8, 1.7), 1.5);
  });
});

describe("calculateNumber", function () {
  it("should return 3 when the args are 1.2 and  2.8", function () {
    assert.equal(calculateNumber("DIVIDE", 2.8, 1.2), 3);
  });
});

describe("calculateNumber", function () {
  it("should return 1 when the args are 1.7 and  2.1", function () {
    assert.equal(calculateNumber("DIVIDE", 2.1, 1.7), 1);
  });
});

describe("calculateNumber", function () {
  it("should return 2 when the args are 1.2 and  2.1", function () {
    assert.equal(calculateNumber("DIVIDE", 2.1, 1.2), 2);
  });
});
describe("calculateNumber", function () {
  it("should return Error when the args are 1.2 and  2.1", function () {
    assert.equal(calculateNumber("DIVIDE", 2.1, 0.3), "Error");
  });
});
