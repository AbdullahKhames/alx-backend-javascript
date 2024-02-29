#!/usr/bin/node
const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");
describe("calculateNumber", function () {
  it("should return 5 when the args are 1.7 and  2.8", function () {
    expect(calculateNumber("SUM", 1.7, 2.8)).to.equal(5);
  });
});

describe("calculateNumber", function () {
  it("should return 4 when the args are 1.2 and  2.8", function () {
    expect(calculateNumber("SUM", 1.2, 2.8)).to.equal(4);
  });
});

describe("calculateNumber", function () {
  it("should return 4 when the args are 1.7 and  2.1", function () {
    expect(calculateNumber("SUM", 1.7, 2.1)).to.equal(4);
  });
});

describe("calculateNumber", function () {
  it("should return 3 when the args are 1.2 and  2.1", function () {
    expect(calculateNumber("SUM", 1.2, 2.1)).to.equal(3);
  });
});
describe("calculateNumber", function () {
  it("should return 1 when the args are 2.8, 1.7", function () {
    expect(calculateNumber("SUBTRACT", 2.8, 1.7)).to.equal(1);
  });
});

describe("calculateNumber", function () {
  it("should return 2 when the args are  2.8, 1.2", function () {
    expect(calculateNumber("SUBTRACT", 2.8, 1.2)).to.equal(2);
  });
});

describe("calculateNumber", function () {
  it("should return 0 when the args are  2.1, 1.7", function () {
    expect(calculateNumber("SUBTRACT", 2.1, 1.7)).to.equal(0);
  });
});

describe("calculateNumber", function () {
  it("should return 1 when the args are  2.1, 1.2", function () {
    expect(calculateNumber("SUBTRACT", 2.1, 1.2)).to.equal(1);
  });
});
describe("calculateNumber", function () {
  it("should return 1.5 when the args are 2.8, 1.7", function () {
    expect(calculateNumber("DIVIDE", 2.8, 1.7)).to.equal(1.5);
  });
});

describe("calculateNumber", function () {
  it("should return 3 when the args are 1.2 and  2.8", function () {
    expect(calculateNumber("DIVIDE", 2.8, 1.2)).to.equal(3);
  });
});

describe("calculateNumber", function () {
  it("should return 1 when the args are 1.7 and  2.1", function () {
    expect(calculateNumber("DIVIDE", 2.1, 1.7)).to.equal(1);
  });
});

describe("calculateNumber", function () {
  it("should return 2 when the args are 1.2 and  2.1", function () {
    expect(calculateNumber("DIVIDE", 2.1, 1.2)).to.equal(2);
  });
});
describe("calculateNumber", function () {
  it("should return Error when the args are 1.2 and  2.1", function () {
    expect(calculateNumber("DIVIDE", 2.1, 0.3)).to.equal("Error");
  });
});
