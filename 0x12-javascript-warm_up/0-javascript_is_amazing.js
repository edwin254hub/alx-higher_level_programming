#!/usr/bin/node

const args = process.argv.slice(2);

if (args[0] === undefined) {
  console.log("No argument");
} else {
  const myVar = 'Javascript is amazing';
  console.log(myVar);
}
