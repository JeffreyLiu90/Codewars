function basicOp(operation, value1, value2) {
  const stringOp = value1.toString() + operation + value2.toString();
  return eval(stringOp);
}

console.log(basicOp("+", 4, 7));
