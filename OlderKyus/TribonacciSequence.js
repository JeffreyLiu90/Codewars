function tribonacci(signature, n) {
  let arr = [];
  if (n < 1) {
    return [];
  } else if (n < 4) {
    for (let i = 0; i < n; i++) {
      arr.push(signature[i]);
    }
    return arr;
  }

  let pointer1 = 0;
  let pointer2 = 1;
  let pointer3 = 2;

  while (signature.length < n) {
    let result =
      signature[pointer1] + signature[pointer2] + signature[pointer3];
    signature.push(result);

    pointer1 += 1;
    pointer2 += 1;
    pointer3 += 1;
  }
}

//Other solutions
function tribonacci(s, n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(i < 3 ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr;
}
