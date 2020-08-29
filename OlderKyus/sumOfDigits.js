//turn into an array
//split the array
//reduce arr
//

const digital_root = n => {
  while (n > 9) {
    const newN = n
      .toString()
      .split("")
      .map(i => parseInt(i))
      .reduce((sum, currentValue) => sum + currentValue);

    n = newN;
  }

  return n;
};

console.log(digital_root(456));
