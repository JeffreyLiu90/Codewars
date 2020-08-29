// function century(year) {
//   return Math.floor((year - 1) / 100) + 1;
// }
function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(170001)); /// should be 18
console.log(century(1900)); // should be 19
