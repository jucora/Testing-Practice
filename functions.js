const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  if (string.length === 0) {
    return string;
  } else {
    return reverseString(string.substr(1)) + string[0];
  }
};

const calculator = {
  add: (num1, num2) => { return num1 + num2 },
  subtract: (num1, num2) => { return num1 - num2 },
  divide: (num1, num2) => { return num1 / num2 },
  multiply: (num1, num2) => { return num1 * num2 },
};

module.exports = { capitalize, reverseString, calculator };
