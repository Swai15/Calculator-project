// basic four math funtions
function add(num1,num2) {
  return num1 + num2;
}

function subtract(num1,num2) {
  return num1 - num2;
}

function multiply(num1,num2) {
  return num1 * num2;
}

function divide(num1,num2) {
  return num1 / num2;
}

// Calculate total function
function calcTotal(num1,operator,num2) {
  if (operator === "add") {
    return num1 + num2;
  } else if (operator === "subtract") {
    return subtract(num1,num2);
  } else if (operator === "multiply") {
    return multiply(num1,num2);
  } else if (operator === "divide") {
    return divide(num1,num2);
  }
}

//populate display
const keys = document.querySelector(".calc-keys");
const display = document.querySelector(".calc-display");
const wholeCalc = document.querySelector(".calc-container");

keys.addEventListener("click",(event) => {
  if (event.target.matches("button")) {
    const key = event.target; //button press
    const action = key.dataset.action; // key-data type. number/operator
    const keyContent = key.textContent;
    const displayNum = display.textContent;

    //add numbers to display
    if (!action) {
      if (displayNum === "0") {
        display.textContent = keyContent;
      }
      else if (displayNum !== "0") {
        display.textContent = displayNum + keyContent;
      }
    }

    //add decimal to display
    if (action === "decimal") {
      display.textContent = displayNum + ".";
    }

    //reset display after operator click and new number input
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      // const firstNum = displayNum;
      wholeCalc.dataset.operator = action;
      wholeCalc.dataset.firstvalue = displayNum;
      display.textContent = "0";
    }

    const previousKeyType = wholeCalc.dataset.previousKeyType;

    if (!action) {
      if (displayNum === "0" || previousKeyType === "operator") {
        display.textContent = keyContent;
      } else {
        display.textContent = displayNum + keyContent;
      }
    }

    if (action === "calculate") {
      const firstNum = wholeCalc.dataset.firstvalue;
      const operator = wholeCalc.dataset.operator;
      const secondNum = displayNum;
      console.log(calcTotal(firstNum,operator,secondNum))
      display.textContent = calcTotal(firstNum,operator,secondNum);
    }

    if (action === "reset") {
      display.textContent = "0"
      const firstNum = "0";
      const secondNum = "0";
    }


  }
});

