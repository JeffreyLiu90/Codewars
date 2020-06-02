function abbrevName(name) {
  let newName = name.split(" ").map(letter => letter.charAt(0).toUpperCase());
  return newName.join(".");
}

console.log(abbrevName("Sam Harris")); // S.H.
