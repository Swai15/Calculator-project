// basic funtionality

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// operator function

function operator(sign, num1, num2) {
  if (sign === "+") {
    return add(num1, num2);
  } else if (sign === "-") {
    return subtract(num1, num2);
  } else if (sign === "*") {
    return multiply(num1, num2);
  } else if (sign === "/") {
    return divide(num1, num2);
  }
}

console.log(operator("/", 3, 5));
