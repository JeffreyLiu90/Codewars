function findOdd(A) {
  let odd = {};

  for (let i = 0; i < A.length; i++) {
    if (odd[A[i]]) {
      odd[A[i]]++;
    } else {
      odd[A[i]] = 1;
    }
  }

  for (let key in odd) {
    if (odd[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
