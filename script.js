function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return subtract(operand1, operand2);
    case "*":
      return multiply(operand1, operand2);
    case "/":
      return divide(operand1, operand2);
  }
}

let operand1;
let operator;
let operand2;

console.log(divide(5, 0));
console.log(operate("+", 6, 4));
console.log(operate("*", 6, 4));
console.log(operate("/", 6, 4));
console.log(operate("-", 6, 4));
