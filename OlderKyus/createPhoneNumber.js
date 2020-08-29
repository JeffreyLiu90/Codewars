//Brute

function createPhoneNumber(numbers) {
  return numbers
    .map((number, index) => {
      if (index === 0) {
        return "(" + number;
      } else if (index === 2) {
        return number + ")";
      } else if (index === 3) {
        return " " + number;
      } else if (index === 5) {
        return number + "-";
      }
      return number;
    })
    .join("");
}

//hash table

const createPhoneNumber = numbers => {
  const mapper = {
    0: "(",
    3: ") ",
    6: "-"
  };

  return numbers
    .map((num, index) => (mapper[index] ? mapper[index] + num : num))
    .join("");
};
