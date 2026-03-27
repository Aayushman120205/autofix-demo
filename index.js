// ✅ This is the CORRECT version of the app
// The bot will restore this when it breaks

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

function greet(name) {
  if (!name) throw new Error("Name is required");
  return `Hello, ${name}!`;
}

module.exports = { add, multiply, divide, greet };
