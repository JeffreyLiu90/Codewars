function solution(number) {
  let sum = 0;

  for (let num of number) {
    if (num % 3 === 0 && num % 5 === 0) {
      sum += num;
    } else if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(3, 2, 5, 6, 9);
