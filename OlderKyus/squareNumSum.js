// Complete the square sum function so that it squares each number passed into it and then sums the results together.

//Reduce

const squareSum = num =>
  num.reduce((accelerator, number) => Math.pow(number, 2) + accelerator, 0);

//Map
const squareSum = num => {
  let result = 0;

  num.map(number => (result += Math.pow(number, 2)));
  return result;
};

console.log(squareSum([1, 2])); // => 5)
console.log(squareSum([0, 3, 4, 5])); // => 50)
