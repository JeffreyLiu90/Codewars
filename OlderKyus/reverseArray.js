// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const digitize = num => {
  let newNum = num
    .toString()
    .split("")
    .reverse();
  return newNum.map(Number);
};

//online method

function digitize(num) {
  return String(num)
    .split("")
    .map(Number)
    .reverse();
}

console.log(digitize(35231)); // => [1,3,2,5,3]
