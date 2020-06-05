const caesarCipher = () => {
  const lowerAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const upperAlphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  let index = '';

  const setCharacter = (char, message) => {
    message.push(char);
    return message;
  };

  const checkNegativeIndex = (index) => {
    if (index < 0) {
      index = 26 - Math.abs(index);
    }
    return index;
  };

  const wrap = (char, key, arrayType, message, encryptPhase) => {
    if (encryptPhase === 'encrypt') {
      if (arrayType === 'lower') {
        index = lowerAlphabet.indexOf(char) + key;
        index %= 26;
        message.push(lowerAlphabet[index]);
      } else {
        index = upperAlphabet.indexOf(char) + key;
        index %= 26;
        message.push(upperAlphabet[index]);
      }
    } else if (encryptPhase === 'decrypt') {
      if (arrayType === 'upper') {
        index = upperAlphabet.indexOf(char) - key;
        index = checkNegativeIndex(index);
        index %= 26;
        message.push(upperAlphabet[index]);
      } else {
        index = lowerAlphabet.indexOf(char) - key;
        index = checkNegativeIndex(index);
        index %= 26;
        message.push(lowerAlphabet[index]);
      }
    }
    return message;
  };

  const encrypt = (string, key) => {
    let message = [];
    string.split('').map((char) => {
      if (lowerAlphabet.indexOf(char) !== -1) {
        message = wrap(char, key, 'lower', message, 'encrypt');
      } else if (upperAlphabet.indexOf(char) !== -1) {
        message = wrap(char, key, 'upper', message, 'encrypt');
      } else {
        message = setCharacter(char, message);
      }
      return true;
    });
    return message.join('');
  };

  const decrypt = (string, key) => {
    const message = [];
    string.split('').map((char) => {
      if (lowerAlphabet.indexOf(char) !== -1) {
        wrap(char, key, 'lower', message, 'decrypt');
      } else if (upperAlphabet.indexOf(char) !== -1) {
        wrap(char, key, 'upper', message, 'decrypt');
      } else {
        setCharacter(char, message);
      }
      return true;
    });
    return message.join('');
  };
  return {
    encrypt,
    decrypt,
  };
};

export default caesarCipher;
