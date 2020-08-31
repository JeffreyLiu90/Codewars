function toCamelCase(str) {
  let result = str.replace(/[^0-9a-z]/gi, " ").split(" ");
  let arr = [];
  let test = result.shift();
  arr.push(test);

  result.map(word => arr.push(word[0].toUpperCase() + word.substr(1)));

  return arr.join("");
}

console.log(toCamelCase("the_stealth_warrior"));
