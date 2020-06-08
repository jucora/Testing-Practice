import caesarCipher from './caesarCipher';

describe('caesarCipher', () => {
  /** ********************************************************** */
  //    TESTING PUBLIC FUNCTIONS ENCRYPT AND DECRYPT
  /** ********************************************************** */

  describe('encrypt', () => {
    const messageToEncrypt = "Hello world, I'm learning Jest";
    it('should encrypt a message', () => {
      expect(caesarCipher().encrypt(messageToEncrypt, 5)).toEqual(
        "Mjqqt btwqi, N'r qjfwsnsl Ojxy",
      );
    });
  });
  describe('decrypt', () => {
    const messageToDecrypt = "Mjqqt btwqi, N'r qjfwsnsl Ojxy";
    it('should decrypt a message', () => {
      expect(caesarCipher().decrypt(messageToDecrypt, 5)).toEqual(
        "Hello world, I'm learning Jest",
      );
    });
  });
});
