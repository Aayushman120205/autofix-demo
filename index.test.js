const { add, multiply, divide, greet } = require("./index");
//great
// ── Math tests ────────────────────────────────────────────────
//NowWorking
test("add: 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("add: negative numbers", () => {
  expect(add(-1, -2)).toBe(-3);
});

test("multiply: 3 * 4 = 12", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("divide: 10 / 2 = 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("divide: throws on zero", () => {
  expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
});

// ── Greet tests ───────────────────────────────────────────────
test("greet: returns greeting", () => {
  expect(greet("Alice")).toBe("Hello, Alice!");
});

test("greet: throws if no name", () => {
  expect(() => greet()).toThrow("Name is required");
});
