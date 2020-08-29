// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  const newStr = str
    .split("")
    .reverse()
    .join("")
    .slice(0, ending.length);

  const newEnding = ending
    .split("")
    .reverse()
    .join("");

  return newStr === newEnding ? true : false;
}

//Other solutions

function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abcde", "cde")); // true
console.log(solution("abcde", "abc")); // false
console.log(solution("samurai", "ai"));
