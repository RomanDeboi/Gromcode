import { createArrayOfFunctions } from './index.js';

describe('Testing of "createArrayOfFunctions" function', () => {
  test('If taken not an integer then returns "null"', () => {
    expect(createArrayOfFunctions('5')).toBe(null);
    expect(createArrayOfFunctions(NaN)).toBe(null);
  });
  test('If taken without argument then returns empty array', () => {
    expect(createArrayOfFunctions().length).toBe(0);
    expect(createArrayOfFunctions(undefined).length).toBe(0);
  });
  const testDimension = 7;
  const arrayOfFunctions = createArrayOfFunctions(testDimension);
  test('Taken integer and return array of functions', () => {
    for (let i = 0; i < arrayOfFunctions.length; i++) {
      expect(typeof arrayOfFunctions[i]).toBe('function');
    }
  });
  test('Taken integer and return array with such dimension', () => {
    expect(arrayOfFunctions.length).toBe(testDimension);
  });
  test('Functions from array must returns index of element in which they are located', () => {
    for (let i = 0; i < arrayOfFunctions.length; i++) {
      expect(arrayOfFunctions[i]()).toBe(i);
    }
  });
});
