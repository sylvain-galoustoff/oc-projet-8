const display = document.getElementById("display");

const operators = ["+", "-", "*", "/"];
let lastEntry = 0;

const appendToDisplay = (value) => {
  if (lastEntry === 0 && operators.includes(value)) {
    return;
  }

  if (operators.includes(value) && operators.includes(lastEntry)) {
    const removeOperator = display.value.slice(0, -1);
    display.value = removeOperator + value;
  } else {
    lastEntry = value;
    display.value = display.value + value;
  }
};

const clearDisplay = () => {
  display.value = "";
  lastEntry = 0;
};

const calculateResult = () => {
  const result = eval(display.value);
  if (result === Infinity) {
    display.value = "Division by zero is not allowed";
  } else if (result) {
    display.value = result;
  }
};
