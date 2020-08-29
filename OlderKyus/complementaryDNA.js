const DNAStrand = dna => {
  const result = dna
    .split("")
    .map(str => {
      if (str === "A") {
        return (str = "T");
      } else if (str === "T") {
        return (str = "A");
      } else if (str === "C") {
        return (str = "G");
      } else {
        return (str = "C");
      }
    })
    .join("");

  return result;
};

// Other solutions

var pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand(dna) {
  return dna
    .split("")
    .map(function(v) {
      return pairs[v];
    })
    .join("");
}

function DNAStrand(dna) {
  return dna
    .replace(/A/g, "t")
    .replace(/T/g, "a")
    .replace(/C/g, "g")
    .replace(/G/g, "c")
    .toUpperCase();
}
console.log(DNAStrand("ATTGC"));
