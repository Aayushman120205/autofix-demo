function add(a, b) {
  return a - b; // ❌ bug: subtraction instead of addition
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
  return `Hello, ${name}!`; // <-- FIXED (comma added)
}

module.exports = { add, multiply, divide, greet };