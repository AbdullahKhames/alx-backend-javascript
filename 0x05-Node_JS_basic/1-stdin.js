#!/usr/bin/node
const prompt = require("prompt-sync")({ sigint: true });

if (process.stdin.isTTY) {
  const name = prompt("Welcome to Holberton School, what is your name?\n");
  console.log(`Your name is: ${name}`);
  console.log("This important software is now closing");
} else {
  process.stdin.on("data", (data) => {
    console.log("Welcome to Holberton School, what is your name?");
    console.log(`Your name is: ${data.toString()}`);
    console.log("This important software is now closing");
    process.exit();
  });
}
