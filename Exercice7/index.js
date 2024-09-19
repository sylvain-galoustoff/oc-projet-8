const convertToBinary = () => {
  const input = document.querySelector("#decimalInput");
  let decimalNumber = Number(input.value);
  let binaryResult = "";

  if (decimalNumber) {
    while (decimalNumber > 0) {
      binaryResult = (decimalNumber % 2) + binaryResult;
      decimalNumber = Math.floor(decimalNumber / 2);
    }
    document.querySelector("#binaryResult").append(binaryResult);
  } else {
    console.log("not a number");
  }
};
