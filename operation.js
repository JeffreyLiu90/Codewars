function basicOp(operation, value1, value2) {
  const stringOp = value1.toString() + operation + value2.toString();
  return eval(stringOp);
}

console.log(basicOp("+", 4, 7));

//the switch case method

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}
