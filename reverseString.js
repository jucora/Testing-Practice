const reverseString = (string) => {
  if (string.length === 0) {
    return string;
  } else {
    return reverseString(string.substr(1)) + string[0];
  }
};

export default reverseString;
