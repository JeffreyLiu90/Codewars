function narcissistic(value) {
  let newVal = value.toString().split("");

  let newerVal = newVal.reduce((accumulator, currentValue) => {
    return Math.pow(currentValue, newVal.length) + accumulator;
  }, 0);

  return value === newerVal ? true : false;
}

console.log(narcissistic(371));
