#!/usr/bin/node
module.exports = function calculateNumber(type, a, b) {
  let result;
  a = Math.round(a);
  b = Math.round(b);
  switch (type) {
    case "SUM":
      result = a + b;
      break;
    case "SUBTRACT":
      result = a - b;
      break;
    case "DIVIDE":
      if (b === 0) {
        return "Error";
      }
      result = a / b;
      break;
  }
  return result;
};
