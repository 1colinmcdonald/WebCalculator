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
let displayContent = document.querySelector("#displayContent");
function clear() {
  displayContent.textContent = "";
}

let AC = document.querySelector("#AC");
AC.addEventListener("click", clear);

let calculator = document.querySelector("#calculator");

calculator.addEventListener(
  "click",
  (e) => {
    if (
      !isNaN(e.target.textContent) &&
      displayContent.textContent.length < 10
    ) {
      displayContent.textContent += e.target.textContent;
    }
  }
  // function (e) {
  //   console.log("hi");
  //   // if (displayContent.textContent.length < 10) {
  //   //   console.log(e.target.textContent);
  //   //   displayContent.textContent += e.target.textContent;
  // }
);

let operand1;
let operator;
let operand2;
