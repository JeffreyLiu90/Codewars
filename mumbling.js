// This time no story, no theory. The examples below show you how to write function accum:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//split it
//make everything uppercase
//loop or reduce
//each iteration, add based on its index + 1

const accum = str => {
  const upper = str.toLowerCase().split("");

  const final = upper.map((letter, index) => {
    const result = letter.repeat(index + 1);
    return result.charAt(0).toUpperCase() + result.slice(1);
  });

  return final.join(" ").replace(/ /gi, "-");
};

//Another method
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

console.log(accum("Zpg"));
