function persistence(num) {
  let final = 0;

  let result = 1;
  let num1 = num.toString();
  let number = num1.split("");
  console.log("number", number);

  for (let i = 0; i < number.length; i++) {
    result *= number[i];
  }

  let stringResult = result.toString().split("");

  if (stringResult.length === 1) {
    return result;
  } else {
    for (let j = 0; j < stringResult.length; j++) {
      result = 0;
      result *= stringResult[j];
    }
  }

  console.log("result.length", result.toString().split("").length);

  return result;

  // if (result.length === 1) {
  //   console.log("heyy");
  //   return result;
  // } else {
  //   for (let j = 0; j < result.length; j++) {
  //     result = 0;
  //     result *= j;
  //   }
  // }
  // return result;
}

console.log(persistence(39));
// console.log("i", number[i]);
// console.log("current result", result);
