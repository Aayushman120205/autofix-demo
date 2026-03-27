/**
 * restore.js — Restores index.js to its clean working state
 * Run: node scripts/restore.js
 * Use this to reset the demo repo after the bot has fixed it.
 */
//gemini used
// Agian Tryed
//Retrying
//retry
const fs   = require("fs");
const path = require("path");

const cleanCode = `// ✅ This is the CORRECT version of the app
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
  return \`Hello, \${name}!\`;
}

module.exports = { add, multiply, divide, greet };
`;

fs.writeFileSync(path.join(__dirname, "../index.js"), cleanCode);
console.log("✅ index.js restored to clean state. Ready for next demo.\n");
