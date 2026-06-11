const smallestDivisor = (num) => {
  if (num === 1) {
    return 1;
  }
  const iter = (divisor) => {
    if (num % divisor === 0) {
      return divisor;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

console.log(smallestDivisor(17));
