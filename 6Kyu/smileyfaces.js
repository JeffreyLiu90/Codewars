//return the total number of smiling faces in the array
function countSmileys(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const array = [];
  let result = arr.map(face => {
    if (
      (face.length === 2 && face[0] === ":") ||
      (face.length === 2 && face[0] === ";")
    ) {
      if (face[1] === ")" || face[1] === "D") {
        array.push(face);
      }
    } else if (
      (face.length === 3 && face[0] === ":") ||
      (face.length === 3 && face[0] === ";")
    ) {
      if (face[1] === "-" || face[1] === "~") {
        if (face[2] === "D" || face[2] === ")") {
          array.push(face);
        }
      }
    }
  });

  return array.length;
}

// Other solutions

function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
