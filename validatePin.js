function validatePIN(pin) {
  if (
    pin.match(/[a-z]/gi) ||
    parseInt(pin) < 0 ||
    pin.length !== 4 ||
    pin.length !== 6
  ) {
    return false;
  } else {
    return true;
  }
  // if(pin.match(/[a-z]/gi) || pin.match(//))
  // return pin.match(/![0-9]/g) ? false : true;
}

console.log(validatePIN("1234")) === true;
console.log(validatePIN("12345")) === false;
console.log(validatePIN("a234")) === false;
console.log(validatePIN("-1234"));
