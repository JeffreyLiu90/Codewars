// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

const comp = (array1, array2) => {
  if (array1 === null || array2 === null) {
    return false;
  }

  array2.map(num => {
    let squaredNumber = Math.sqrt(num);

    if (array1.includes(squaredNumber)) {
      return array1.splice(array1.indexOf(squaredNumber), 1);
    }
  });

  return array1.length > 0 ? false : true;
};

array1 = [2, 2, 3];
array2 = [4, 9, 9];

console.log(comp(array1, array2));
