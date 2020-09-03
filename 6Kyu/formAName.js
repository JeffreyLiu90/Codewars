// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

function list(names) {
  let arr = [];

  if (names.length === 0) {
    return "";
  } else if (names.length === 1) {
    return names[0].name;
  } else if (names.length === 2) {
    return names[0].name + " & " + names[1].name;
  } else {
    names.map((character, index) => {
      let lastIndex = names.length - 1;
      if (index === 0) {
        arr.push(character.name);
      }

      if (index > 0 && index < lastIndex) {
        arr.push(", " + character.name);
      }
      if (index === lastIndex) {
        arr.push(" & " + character.name);
      }
    });
  }

  let result = arr.join("");

  return result;
}

//Other Solutions

function list(names) {
  return names.reduce(function(prev, current, index, array) {
    if (index === 0) {
      return current.name;
    } else if (index === array.length - 1) {
      return prev + " & " + current.name;
    } else {
      return prev + ", " + current.name;
    }
  }, "");
}
console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" }
  ])
);
