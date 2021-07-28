import { getMinSquaredNumber } from './getMinSquaredNumber.js';

describe('Testing of getMinSquaredNumber function', () => {
  test('If taken empty array then returns null', () => {
    expect(getMinSquaredNumber([])).toEqual(null);
  });
  test('If taken string then returns null', () => {
    expect(getMinSquaredNumber('abc')).toEqual(null);
  });
  test('If taken array then returns squared smallest absolute number', () => {
    expect(getMinSquaredNumber([-2, 45, 2.1, 5])).toEqual(4);
  });
});
