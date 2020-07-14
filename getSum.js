// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

const getSum = (a, b) => {
  const orderedNums = (a + "" + b)
    .toString()
    .split("")
    .sort((a, b) => a - b)
    .join("");
  console.log(orderedNums);
  let result = 0;
  // for (i = firstNum; i <= secondNum; i++) {
  //   console.log(i);
  //   result += i;
  // }
  return result;
};

console.log(getSum(-1, 2));
