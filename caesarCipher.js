/*************************************************************/
// IMPORTANT: COMMENTED CODE IS TO TEST PRIVATE FUNCTIONS
/*************************************************************/

const caesarCipher = () => {
  const lowerAlphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  const upperAlphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const encryptedMessage = [];
  const decryptedMessage = [];
  let index = "";

  const wrap = (char, key, arrayType) => {
    if (arrayType === "lower") {
      index = lowerAlphabet.indexOf(char) + key;
      index = index % 26;
      encryptedMessage.push(lowerAlphabet[index]);
    } else if (arrayType === "upper") {
      index = upperAlphabet.indexOf(char) + key;
      index = index % 26;
      encryptedMessage.push(upperAlphabet[index]);
    }
    //return encryptedMessage;
  };
  const setCharacter = (char, cipherStep) => {
    if (cipherStep === "encrypt") {
      encryptedMessage.push(char);
    } else if (cipherStep === "decrypt") {
      decryptedMessage.push(char);
    }
    //return encryptedMessage;
    //return decryptedMessage
  };
  const encrypt = (string, key = 5) => {
    string.split("").map((char) => {
      if (lowerAlphabet.indexOf(char) !== -1) {
        wrap(char, key, "lower");
      } else if (upperAlphabet.indexOf(char) !== -1) {
        wrap(char, key, "upper");
      } else {
        setCharacter(char, "encrypt");
      }
    });
    return encryptedMessage.join("");
  };

  const checkNegativeIndex = (index) => {
    if (index < 0) {
      index = 26 - Math.abs(index);
    }
    return index;
  };
  const decrypt = (string, key = 5) => {
    string.split("").map((char) => {
      if (lowerAlphabet.indexOf(char) !== -1) {
        index = lowerAlphabet.indexOf(char) - key;
        index = checkNegativeIndex(index);
        index = index % 26;
        decryptedMessage.push(lowerAlphabet[index]);
      } else if (upperAlphabet.indexOf(char) !== -1) {
        index = upperAlphabet.indexOf(char) - key;
        index = checkNegativeIndex(index);
        index = index % 26;
        decryptedMessage.push(upperAlphabet[index]);
      } else {
        setCharacter(char, "decrypt");
      }
    });
    return decryptedMessage.join("");
  };
  return {
    //wrap,
    //setCharacter,
    //checkNegativeIndex,
    encrypt,
    decrypt,
  };
};

module.exports = caesarCipher;
