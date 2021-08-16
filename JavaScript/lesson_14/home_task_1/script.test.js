import { add, decrease, reset, getMemo } from './script.js';

describe('Testing of functins from lesson 14 home task 1', () => {
  describe('Testing of function "add"', () => {
    test('Taken number and sum up it with number in memory', () => {
      reset();
      add(5);
      expect(getMemo()).toBe(5);
    });
  });

  describe('Testing of function "decrease"', () => {
    test('Taken number and subtract it from number in memory', () => {
      reset();
      decrease(5);
      expect(getMemo()).toBe(-5);
    });
  });

  describe('Testing of function "reset"', () => {
    test('Must reset value in memory to 0', () => {
      reset();
      add(5);
      reset();
      expect(getMemo()).toBe(0);
    });
  });

  describe('Testing of function "getMemo"', () => {
    test('Must return value from memory', () => {
      reset();
      add(4);
      expect(getMemo()).toBe(4);
    });
  });
});
