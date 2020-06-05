const caesarCipher = require("./caesarCipher");

describe("caesarCipher", () => {
  let encryptedMessage = [];
  //Testing wrapping
  describe("wrap", () => {
    it("should wrap a lower character based on the given key", () => {
      const char = "a";
      const key = 5;
      const arrayType = "lower"
      encryptedMessage = caesarCipher().wrap(char, key, arrayType)
      expect(encryptedMessage).toEqual(["f"])
    })
    it("should wrap an upper character based on the given key", () => {
      const char = "Z";
      const key = 5;
      const arrayType = "upper"
      encryptedMessage = caesarCipher().wrap(char, key, arrayType)
      expect(encryptedMessage).toEqual(["E"])
    })
  })
  //Testing setCharacter
  describe("setCharacter", () => {
    it("should set a character different than uppercase or lowercase letter", () => {
      const char = "@";
      const cipherStep = "encrypt"
      encryptedMessage = caesarCipher().setCharacter(char, cipherStep);
      expect(encryptedMessage).toEqual(["@"])

    })
  })
  //Testing if the index is negative
  describe("checkNegativeIndex", () => {
    it("should go to the last alphabet letter when the index gets negative in the decryption process, so the new char index can be assigned", () => {
      const currentIndex = -4;
      const indexAfterValidation = caesarCipher().checkNegativeIndex(currentIndex)
      expect(indexAfterValidation).toBeGreaterThan(0)
    })
  })
  //Testing public functions ENCRYPT and DECRYPT
  describe("encrypt", () => {
    it("should encrypt a message", () => {
      expect(caesarCipher().encrypt("Hello world, I'm learning Jest")).toEqual("Mjqqt btwqi, N'r qjfwsnsl Ojxy");
    })
  })
  describe("decrypt", () => {
    it("should decrypt a message", () => {
      expect(caesarCipher().decrypt("Mjqqt btwqi, N'r qjfwsnsl Ojxy")).toEqual("Hello world, I'm learning Jest");
    })
  })
})
