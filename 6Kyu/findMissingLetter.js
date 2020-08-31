const findMissingLetter = arr => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lettersArr = letters.split("");

  const emptArr = [];
  const answer = [];
  //index of first letter?

  let startingIndex = lettersArr.indexOf(arr[0]);
  let endingIndex = startingIndex + arr.length + 1;

  //includes?

  let newArr = lettersArr.slice(startingIndex, endingIndex);

  newArr.map(letter =>
    arr.includes(letter) ? emptArr.push(letter) : answer.push(letter)
  );
  return answer[0];
};

console.log(findMissingLetter(["a", "b", "d", "e"]));

// Online answers

function findMissingLetter(array) {
  var i = array[0].charCodeAt();
  array.map(x => (x.charCodeAt() == i ? i++ : i));
  return String.fromCharCode(i);
}
