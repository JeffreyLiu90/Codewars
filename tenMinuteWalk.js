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

console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
