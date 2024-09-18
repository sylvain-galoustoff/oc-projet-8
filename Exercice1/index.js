const pairNumbers = (start, end) => {
  const response = [];
  const startNumber = Number(start);
  const endNumber = Number(end);
  for (let i = startNumber; i <= endNumber; i++) {
    if (i % 2 === 0) {
      response.push(i);
    }
  }
  return response.join(",");
};

console.log(pairNumbers("22", "31"));

export default pairNumbers;
