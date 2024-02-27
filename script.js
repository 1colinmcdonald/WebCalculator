let displayContent = document.querySelector("#displayContent");
let info = { operand1: null, operand2: null, operator: null };

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

function operate() {
  clearSelectedOperator();
  printInfo();
  if (info.operand1 === null) info.operand1 = displayContent.textContent;
  if (info.operand2 === null) return info.operand1;
  workingOperand1 = Number(info.operand1);
  workingOperand2 = Number(info.operand2);
  let result = null;
  switch (info.operator) {
    case "+":
      result = add(workingOperand1, workingOperand2);
      break;
    case "-":
      result = subtract(workingOperand1, workingOperand2);
      break;
    case "*":
      result = multiply(workingOperand1, workingOperand2);
      break;
    case "/":
      result = divide(workingOperand1, workingOperand2);
      break;
  }
  info.operand1 = null;
  info.operand2 = null;
  info.operator = null;

  if (result === null) return "0";
  printInfo();
  return result.toString().slice(0, 9);
}

function handleClear() {
  displayContent.textContent = "0";
  info.operand1 = null;
  info.operator = null;
  info.operand2 = null;
  clearSelectedOperator();
}

let calculator = document.querySelector("#calculator");
calculator.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "BUTTON") e.target.classList.add("highlighted");
});

calculator.addEventListener("mouseout", (e) => {
  e.target.classList.remove("highlighted");
});

calculator.addEventListener("click", (e) => {
  let input = e.target.textContent;
  handleInput(input);
});

window.addEventListener("keydown", (e) => {
  let options = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    c: "AC",
    C: "AC",
    a: "AC",
    A: "AC",
    d: "D",
    D: "D",
    Backspace: "D",
    Delete: "D",
    Enter: "=",
    "=": "=",
    "/": "/",
    "*": "*",
    "-": "-",
    "+": "+",
  };
  let input = options[e.key];
  console.log("handling input:");
  printInfo();
  handleInput(options[e.key]);
});

function handleInput(input) {
  if (!isNaN(input) || input === ".") {
    handleData(input);
  } else if (input === "/" || input === "*" || input === "-" || input === "+") {
    handleOperator(input);
  } else if (input === "=") {
    handleEquals();
  } else if (input === "D") {
    handleDelete();
  } else if (input === "AC") {
    handleClear();
  }
}
function handleDelete() {
  if (info.operator !== null && info.operand2 !== null) {
    displayContent.textContent = displayContent.textContent.slice(0, -1);
    if (displayContent.textContent === "") {
      displayContent.textContent = "0";
    }
    info.operand2 = displayContent.textContent;
  }
  if (info.operator == null) {
    displayContent.textContent = displayContent.textContent.slice(0, -1);
    if (displayContent.textContent === "") {
      displayContent.textContent = "0";
    }
    info.operand1 = displayContent.textContent;
  }
}

function handleEquals() {
  displayContent.textContent = operate();
}

function handleOperator(input) {
  console.log(input);
  let button = "";
  switch (input) {
    case "/":
      button = "divide";
      break;
    case "*":
      button = "multiply";
      break;
    case "-":
      button = "subtract";
      break;
    case "+":
      button = "add";
      break;
  }

  clearSelectedOperator();
  if (info.operand2 !== null) {
    displayContent.textContent = operate();
  }
  let selected = document.querySelector("." + button);
  selected.style.backgroundColor = "rgb(102, 0, 51)";
  info.operator = input;
}

function clearSelectedOperator() {
  let binaryOperators = document.querySelectorAll(".binaryOperator");
  for (let i = 0; i < binaryOperators.length; i++) {
    binaryOperators[i].style.backgroundColor = "rgb(172, 40, 53)";
  }
}

function handleData(input) {
  console.log("handling data:");
  printInfo();

  if (info.operator === null) {
    if (info.operand1 === null && !isNaN(input)) {
      displayContent.textContent = input;
    } else if (displayContent.textContent.length < 9) {
      displayContent.textContent += input;
    }
    info.operand1 = displayContent.textContent;
  } else {
    if (info.operand2 === null) {
      info.operand1 = displayContent.textContent;
      displayContent.textContent = input;
    } else if (info.operand2 !== "0" && displayContent.textContent.length < 9) {
      displayContent.textContent += input;
    }
    info.operand2 = displayContent.textContent;
  }
}
function printInfo() {
  console.log("operand1: " + info.operand1);
  console.log("operand2: " + info.operand2);
  console.log("operator: " + info.operator);
}
