export const getSquaredArray = (arrayOfNubers) =>
  arrayOfNubers.map((number) => number ** 2);

export const getOddNumbers = (arrayOfNubers) =>
  arrayOfNubers.filter((number) => number % 2 === 1);

export default (firstNumber, secondNumber) => firstNumber + secondNumber;
