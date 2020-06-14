const invert = array =>
  array.length === 0
    ? []
    : array.map(num => (num < 0 ? Math.abs(num) : -Math.abs(num)));

//Online Solutions
function invert(array) {
  return array.map(i => 0 - i);
}

console.log(invert([1, 2, 3, 4, 5])); // == [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5])); // == [-1, 2, -3, 4, -5]);
console.log(invert([])); //  == []);
