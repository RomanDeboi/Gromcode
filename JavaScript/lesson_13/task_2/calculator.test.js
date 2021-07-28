import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

describe('Testing of calculator', () => {
  test('Takes an array of numbers and returns an array of squared numbers', () => {
    expect(getSquaredArray([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
  });
  test('Takes an array of numbers and returns an array of odd numbers', () => {
    expect(getOddNumbers([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
  });
  test('Takes two number and returns the sum of these numbers', () => {
    expect(getSum(5, 7)).toEqual(12);
  });
});
