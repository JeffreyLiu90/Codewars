function persistence(num) {
  // change the number into a string and
  // split the number into individual numbers.
  var numArray = num.toString().split("");

  // Initialize a count variable to count its
  // multiplicative persistence.
  let count = 0;

  // Initialize a total variable.
  let total;

  // While loop to make function run only when the split
  // number has more than 1 element.
  while (numArray.length > 1) {
    // Set the total variable equal to the reduce function
    // which gets the sum and gets multiplied by the current
    // value in the loop.
    total = numArray.reduce(function(sum, currentValue) {
      return sum * currentValue;
    });

    // Increment the count variable
    count++;

    //split the new number and reset the function.
    numArray = total.toString().split("");
  }

  // If the new number is no longer greater than 1,
  // then that means we reached the end.
  // Return the count.
  return count;
}

console.log(persistence(39));
// console.log("i", number[i]);
// console.log("current result", result);
