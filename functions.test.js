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
