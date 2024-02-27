#!/usr/bin/node
const readline = require('readline');

if (process.stdin.isTTY) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
    rl.close();
  });
} else {
  process.stdin.on('data', (name) => {
    console.log('Welcome to Holberton School, what is your name?');
    process.stdout.write(`Your name is: ${name}`);
    console.log('This important software is now closing');
    process.exit();
  });
}
