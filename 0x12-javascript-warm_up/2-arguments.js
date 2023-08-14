#!/usr/bin/node
// Check the number of arguments
const numArguments = process.argv.length - 2;

// Print messages based on the number of arguments
if (numArguments === 0) {
  console.log("No argument");
} else if (numArguments === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

