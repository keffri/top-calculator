/***** BUTTON ASSIGNMENTS *****/

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
// const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");
let previousValue = "";
let currentValue = "";
let chosenOperator = undefined;

/***** FUNCTIONS  *****/

function add(a, b) {
  let c = a + b;
  return c;
}

function subtract(a, b) {
  let c = a - b;
  return c;
}

function multiply(a, b) {
  let c = a * b;
  return c;
}

function divide(a, b) {
  let c = a / b;
  return c;
}

function operate(a, b, op) {
  let c = op(a, b);
  return c;
}

/***** EVENT LISTENERS *****/

numberButtons.forEach((numButton) => {
  numButton.addEventListener("click", () => {
    if (
      currentOperandText.textContent.includes(".") &&
      numButton.textContent === "."
    ) {
      currentOperandText.textContent += "";
    } else {
      currentOperandText.textContent += numButton.textContent;
    }
  });
});

operatorButtons.forEach((opButton) => {
  opButton.addEventListener("click", () => {
    previousValue = currentOperandText.textContent;
    currentOperandText.textContent = "";
    if (opButton.textContent === "+") {
      chosenOperator = add;
    } else if (opButton.textContent === "-") {
      chosenOperator = subtract;
    } else if (opButton.textContent === "*") {
      chosenOperator = multiply;
    } else if (opButton.textContent === "÷") {
      chosenOperator = divide;
    }
  });
});

equalsButton.addEventListener("click", () => {
  if (chosenOperator === divide && currentOperandText.textContent === "0") {
    previousValue = "";
    currentOperandText.textContent = "";
    alert("You cannot divide by zero.");
    return;
  }
  currentOperandText.textContent = chosenOperator(
    parseInt(previousValue),
    parseInt(currentOperandText.textContent)
  );
  previousValue = "";
});

clearButton.addEventListener("click", () => {
  previousValue = "";
  currentOperandText.textContent = "";
});

deleteButton.addEventListener("click", () => {
  currentOperandText.textContent = currentOperandText.textContent.slice(0, -1);
});
