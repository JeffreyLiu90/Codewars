// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:

// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return "";

  let longStr = "";

  let newStr = "";

  for (let i = 0; i < strarr.length; i++) {
    newStr = strarr.slice(i, i + k);
    console.log("new", newStr);
    if (newStr.join("").length > longStr.length) {
      longStr = newStr.join("");
    }
  }

  return longStr;
}

// console.log(
//   longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
// ); //, "abigailtheta")
// console.log(
//   longestConsec(
//     [
//       "ejjjjmmtthh",
//       "zxxuueeg",
//       "aanlljrrrxx",
//       "dqqqaaabbb",
//       "oocccffuucccjjjkkkjyyyeehh"
//     ],
//     1
//   )
// ); //, "oocccffuucccjjjkkkjyyyeehh")

//---//
// console.log(longestConsec([], 3)); //, "")
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck"
    ],
    2
  )
); // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
