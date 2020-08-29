function duplicateCount(text) {
  const obj = {};
  let counter = 0;

  let newText = text.toLowerCase();

  for (let letter of newText) {
    letter.toLowerCase();

    obj[letter] ? obj[letter]++ : (obj[letter] = 1);
  }

  Object.values(obj).map(let => {
    if (let > 1) {
      counter++;
    }
  });

  return counter;
}
//Other solutions
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

// console.log(duplicateCount(""));
// console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
