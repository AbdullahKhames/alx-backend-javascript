#!/usr/bin/node
const readline = require("readline-sync");

if (process.stdin.isTTY) {
  const name = readline.question(
    "Welcome to Holberton School, what is your name?\n"
  );
  console.log(`Your name is: ${name}`);
  console.log("This important software is now closing");
} else {
  process.stdin.on("data", (name) => {
    console.log("Welcome to Holberton School, what is your name?");
    process.stdout.write(`Your name is: ${name}`);
    console.log("This important software is now closing");
    process.exit();
  });
}
