// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  //want to sort the original words to find the order
  //grab the number and their value

  let hash = {};

  words.split(" ").map(word => {
    let newWord = word
      .split("")
      .sort()
      .join("");
    hash[word] = newWord[0];
  });

  const newHash = Object.entries(hash).sort((a, b) => a[1] - b[1]);
  return newHash.map(item => item[0]).join(" ");
}

// Other Solutions
function order(words) {
  return words
    .split(" ")
    .sort(function(a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
