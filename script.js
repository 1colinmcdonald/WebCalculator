let displayContent = document.querySelector("#displayContent");
let operand1 = displayContent.textContent;
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
  if (b === 0) {
    return "div by 0 err";
  }
  return a / b;
}

function operate(operator, operand1, operand2) {
  if (operand2 == null) return operand1;
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
  if (result === null) return "0";
  return result.toString().slice(0, 9);
}

function clear() {
  displayContent.textContent = "0";
  operand1 = displayContent.textContent;
  operator = null;
  operand2 = null;
}

let AC = document.querySelector(".clear");
AC.addEventListener("click", clear);

let calculator = document.querySelector("#calculator");
calculator.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "BUTTON") e.target.classList.add("highlighted");
});

calculator.addEventListener("mouseout", (e) => {
  e.target.classList.remove("highlighted");
});

calculator.addEventListener("click", (e) => {
  let input = e.target.textContent;
  if (e.target.classList.contains("data")) {
    if (operator === null) {
      if (operand1 === "0" && !isNaN(input)) {
        displayContent.textContent = input;
      } else if (displayContent.textContent.length < 9) {
        displayContent.textContent += input;
      }
      operand1 = displayContent.textContent;
    } else {
      if (operand2 === null) {
        displayContent.textContent = input;
      } else if (operand2 !== "0" && displayContent.textContent.length < 9) {
        displayContent.textContent += input;
      }
      operand2 = displayContent.textContent;
    }
  } else if (e.target.classList.contains("binaryOperator")) {
    if (operand2 !== null) {
      displayContent.textContent = operate(operator, operand1, operand2);
    }
    operand1 = displayContent.textContent;
    operand2 = null;
    operator = input;
  } else if (input === "=") {
    displayContent.textContent = operate(operator, operand1, operand2);
    operator = null;
    operand1 = displayContent.textContent;
    operand2 = null;
  }
});
