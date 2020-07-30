function isValidWalk(walk) {
  let x = 0;
  let y = 0;

  if (walk.length > 10 || walk.length < 10) {
    return false;
  }

  walk.map(dir => {
    if (dir === "n") {
      y++;
    } else if (dir === "s") {
      y--;
    } else if (dir === "w") {
      x--;
    } else if (dir === "e") {
      x++;
    }
  });

  return x === 0 && y === 0 ? true : false;
}
//Other solutions

function isValidWalk(walk) {
  var dx = 0;
  var dy = 0;
  var dt = walk.length;

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        dy--;
        break;
      case "s":
        dy++;
        break;
      case "w":
        dx--;
        break;
      case "e":
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}

console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
