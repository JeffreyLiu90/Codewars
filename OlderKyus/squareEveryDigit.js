// // Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

const squareDigits = num => {
  return parseInt(
    num
      .toString()
      .split("")
      .map(number => Math.pow(parseInt(number), 2))
      .join("")
  );
};

//Other solutions
function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map(i => i * i)
    .join("");
}

console.log(squareDigits(9119));
