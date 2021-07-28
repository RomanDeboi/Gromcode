import { reverseArray, withdraw, getAdults } from './functions.js';

describe('Testing of "reverseArray" function', () => {
  test('If taken not array then returns null', () => {
    expect(reverseArray('some string')).toBeNull();
  });
  test("Source array shouldn't change", () => {
    let sourceArray = [1, 2, 3, 4, 5];
    reverseArray(sourceArray);
    expect(sourceArray).toEqual([1, 2, 3, 4, 5]);
  });
  test('If taken array then returns reversed array', () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });
});

describe('Testing of "withdraw" function', () => {
  test("If there is not enough money on client's balance then return -1", () => {
    expect(
      withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
    ).toEqual(-1);
  });
  let arrayOfBalances = [1400, 87, -6];
  test('Must return remainder on balance of specified client', () => {
    expect(
      withdraw(['Ann', 'John', 'User'], arrayOfBalances, 'John', 50)
    ).toEqual(37);
  });
  test("Source array of balances shouldn't change", () => {
    expect(arrayOfBalances).toEqual([1400, 87, -6]);
  });
});

describe('Testing of "getAdults" function', () => {
  let objectWithAges = { 'John Doe': 19, Bob: 18 };
  test('Must return object that contains people who are 18 years old', () => {
    expect(getAdults(objectWithAges)).toEqual({
      'John Doe': 19,
      Bob: 18,
    });
  });
  test("Source object with ages shouldn't change", () => {
    expect(objectWithAges).toEqual({ 'John Doe': 19, Bob: 18 });
  });
  test('For empty object function must return empty object', () => {
    expect(getAdults({})).toEqual({});
  });
});
