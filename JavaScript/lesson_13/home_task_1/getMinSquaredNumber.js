export const getMinSquaredNumber = (arrayOfNumbers) => {
  if (!Array.isArray(arrayOfNumbers) || arrayOfNumbers.length === 0)
    return null;
  return (
    arrayOfNumbers.reduce((minAbsoluteNumber, number) => {
      if (Math.abs(number) < minAbsoluteNumber) return Math.abs(number);
      return minAbsoluteNumber;
    }, +Infinity) ** 2
  );
};

console.log(getMinSquaredNumber([]));
