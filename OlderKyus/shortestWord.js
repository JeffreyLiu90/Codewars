// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const findShort = str => {
  const result = [];

  str.split(" ").map(word => result.push(word.length));

  return result.sort((a, b) => a - b)[0];
};

//Other solutions
function findShort(s) {
  return Math.min(...s.split(" ").map(s => s.length));
}

console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);
