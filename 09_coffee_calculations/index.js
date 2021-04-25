function computeSum(coffeeArr) {
  const total = coffeeArr.reduce((acc, cv) => acc + cv * 1.25, 0);
  return `The total bill is ${total}`;
}

export default computeSum;
