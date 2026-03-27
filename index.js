function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b; // ❌ bug: removed zero check
}

function greet(name) {
  if (!name) throw new Error("Name is required");
  return `Hello, ${name}!`;
}

module.exports = { add, multiply, divide, greet };