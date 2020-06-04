const functions = require("./functions");

describe("capitalize", () => {
  it("should return a string with the first character capitalized", () => {
    const myString = "hello";
    expect(functions.capitalize(myString)).toBe("Hello");
  });
});

describe("reverseString", () => {
  it("should returns a string reversed.", () => {
    const myString = "hello";
    expect(functions.reverseString(myString)).toBe("olleh");
  });
});

describe("calculator", () => {
  const num1 = 10;
  const num2 = 2;
  describe("add", () => {
    it("performs the addition of two values", () => {
      expect(functions.calculator.add(num1, num2)).toBe(12);
    });
  });
  describe("subtract", () => {
    it("performs the subtraction of two values", () => {
      expect(functions.calculator.subtract(num1, num2)).toBe(8);
    });
  });
  describe("divide", () => {
    it("performs the division of two values", () => {
      expect(functions.calculator.divide(num1, num2)).toBe(5);
    });
  });
  describe("multiply", () => {
    it("performs the multiplication of two values", () => {
      expect(functions.calculator.multiply(num1, num2)).toBe(20);
    });
  });
});
