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

module.exports = { capitalize, reverseString };
