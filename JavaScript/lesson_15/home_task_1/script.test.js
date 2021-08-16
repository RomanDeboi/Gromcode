import { createCalculator } from './script.js';

describe('Testing of "createCalculator" function', () => {
  const calculator = createCalculator();
  test('Must returns object with methods and propetry', () => {
    expect(Object.keys(calculator).join(' ')).toEqual(
      'memory add decrease reset getMemo'
    );
  });

  test('Created calculators must be independent', () => {
    const calculator2 = createCalculator();
    calculator.reset();
    calculator2.reset();
    calculator.add(5);
    expect(calculator.getMemo() === calculator2.getMemo()).toBeFalsy();
  });

  describe('Testing of method "add"', () => {
    test('Taken number and sum up it with number in memory', () => {
      calculator.reset();
      calculator.add(5);
      expect(calculator.getMemo()).toBe(5);
    });
  });

  describe('Testing of method "decrease"', () => {
    test('Taken number and subtract it from number in memory', () => {
      calculator.reset();
      calculator.decrease(5);
      expect(calculator.getMemo()).toBe(-5);
    });
  });

  describe('Testing of method "reset"', () => {
    test('Must reset value in memory to 0', () => {
      calculator.reset();
      calculator.add(5);
      calculator.reset();
      expect(calculator.getMemo()).toBe(0);
    });
  });

  describe('Testing of method "getMemo"', () => {
    test('Must return value from memory', () => {
      calculator.reset();
      calculator.add(4);
      expect(calculator.getMemo()).toBe(4);
    });
  });
});
