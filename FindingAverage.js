//Finding Average
const find_average = arr => {
  let total = 0;
  arr.map(num => (total += num));
  return total / arr.length;
};

console.log(find_average([1, 2, 3]));
