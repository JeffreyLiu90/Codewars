var validBraces = function(braces) {
  let bracket = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  let arr = [];

  for (let item of braces) {
    if (bracket[item]) {
      arr.push(bracket[item]);
    } else {
      if (arr.pop() !== item) return false;
    }
  }

  return !arr.length;
};
