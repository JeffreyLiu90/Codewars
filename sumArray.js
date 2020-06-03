// const sumArray = array => {
//   let result = 0;
//   array
//     .sort((a, b) => a - b)
//     .slice(1)
//     .reverse()
//     .slice(1)
//     .map(num => (result += num));
//   return result;
// };

sumArray = array =>
  array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((accelerator, num) => num + accelerator, 0)
    : 0;

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray(null));
