let operand1 = null;
let operator = null;
let operand2 = null;

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
  operand1 = Number(operand1);
  operand2 = Number(operand2);
  let result = null;
  switch (operator) {
    case "+":
      result = add(operand1, operand2);
      break;
    case "-":
      result = subtract(operand1, operand2);
      break;
    case "*":
      result = multiply(operand1, operand2);
      break;
    case "/":
      result = divide(operand1, operand2);
      break;
  }
  return result;
}
let displayContent = document.querySelector("#displayContent");
function clear() {
  displayContent.textContent = "";
}

let AC = document.querySelector("#AC");
AC.addEventListener("click", clear);

let calculator = document.querySelector("#calculator");

calculator.addEventListener("click", (e) => {
  let input = e.target.textContent;
  if (!isNaN(input) && displayContent.textContent.length < 10) {
    if (operator === null) {
      displayContent.textContent += input;
    } else {
      if (operand2 === null) {
        displayContent.textContent = input;
      } else {
        displayContent.textContent += input;
      }
      operand2 = displayContent.textContent;
    }
  } else if (e.target.className === "binaryOperator") {
    if (operand2 !== null) {
      displayContent.textContent = operate(operator, operand1, operand2);
    }
    operator = input;
    operand1 = displayContent.textContent;
    operand2 = null;
  } else if (input === "=") {
    console.log("hi");
    console.log(operate(operator, operand1, operand2));
    displayContent.textContent = operate(operator, operand1, operand2);
    operator = null;
    operand1 = displayContent.textContent;
  }
  console.log(
    "operand1: %s\noperator: %s\noperand2: %s\n\n",
    operand1,
    operator,
    operand2
  );
});
