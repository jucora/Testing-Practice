const capitalize = require("./functions");

describe("capitalize", () => {
  it("should return a string with the first character capitalized", () => {
    const myString = "hello";
    expect(capitalize(myString)).toBe("Hello");
  });
});
