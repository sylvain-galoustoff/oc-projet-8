const calculate = (entry1, entry2, operator) => {
  const number1 = Number(entry1);
  const number2 = Number(entry2);
  let response;
  switch (operator) {
    case "+":
      response = number1 + number2;
      break;

    case "-":
      response = number1 - number2;
      break;

    case "*":
      response = number1 * number2;
      break;

    case "/":
      response = number2 === 0 ? "Division by zero is not allowed" : number1 / number2;
      break;

    default:
      response = "Invalid operator";
      break;
  }

  return response;
};

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, "+")); // Affiche 8
console.log(calculate(10, 4, "-")); // Affiche 6
console.log(calculate(7, 2, "*")); // Affiche 14
console.log(calculate(12, 3, "/")); // Affiche 4
console.log(calculate(8, 0, "/")); // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, "%")); // Affiche "Invalid operator"

export default calculate;
