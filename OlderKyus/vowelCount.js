function getCount(str) {
  var vowelsCount = 0;

  str.split("").map(letter => {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelsCount++;
    }
  });

  return vowelsCount;
}

//Another faster solution
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount("aeede"));
