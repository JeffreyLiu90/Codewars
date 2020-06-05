// function invert(array) {
//   if (array.length === 0) {
//     console.log("[]");
//   } else {
//     console.log("not ");
//   }
// }

const invert = array =>
  array.length === 0
    ? []
    : array.map(num => (num < 0 ? Math.abs(num) : -Math.abs(num)));

console.log(invert([1, 2, 3, 4, 5])); // == [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5])); // == [-1, 2, -3, 4, -5]);
console.log(invert([])); //  == []);
