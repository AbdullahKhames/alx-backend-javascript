#!/usr/bin/node
const assert = require("assert");
module.exports =  function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}
