const reverseString = require("./reverseString");

describe("reverseString", () => {
    it("should returns a string reversed.", () => {
        const myString = "hello";
        expect(reverseString(myString)).toBe("olleh");
    });
});

