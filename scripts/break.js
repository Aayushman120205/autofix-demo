/**
 * break.js — Intentionally introduces a bug into index.js
 * Run: node scripts/break.js
 * This simulates a developer accidentally pushing broken code.
 * AutoFix Bot should detect the CI failure and fix it automatically.
 */
//great
//NowWorking
const fs   = require("fs");
const path = require("path");

const bugs = [
  {
    name: "Wrong return value in add()",
    broken: `
function add(a, b) {
  return a - b; // ❌ bug: subtraction instead of addition
}`,
    original: `
function add(a, b) {
  return a + b;
}`
  },
  {
    name: "Missing null check in divide()",
    broken: `
function divide(a, b) {
  return a / b; // ❌ bug: removed zero check
}`,
    original: `
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}`
  },
  {
    name: "Syntax error in greet()",
    broken: `
function greet(name) {
  if (!name) throw new Error("Name is required")
  return \`Hello \${name}!\`; // ❌ bug: missing comma after Hello
}`,
    original: `
function greet(name) {
  if (!name) throw new Error("Name is required");
  return \`Hello, \${name}!\`;
}`
  },
];

// Pick a random bug each time so the demo stays fresh
const bug = bugs[Math.floor(Math.random() * bugs.length)];

let content = fs.readFileSync(path.join(__dirname, "../index.js"), "utf-8");
content = content.replace(bug.original.trim(), bug.broken.trim());
fs.writeFileSync(path.join(__dirname, "../index.js"), content);

console.log(`\n💥 Bug introduced: "${bug.name}"`);
console.log("   Push this to GitHub to trigger AutoFix Bot\n");