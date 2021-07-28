import { calc } from './calculator.js';

describe('Testing of calculator', () => {
  describe('Testing of mathematical operators', () => {
    test('Operator +', () => {
      expect(calc('5 + 5')).toEqual('5 + 5 = 10');
    });
    test('Operator -', () => {
      expect(calc('10 - 5')).toEqual('10 - 5 = 5');
    });
    test('Operator *', () => {
      expect(calc('5 * 5')).toEqual('5 * 5 = 25');
    });
    test('Operator /', () => {
      expect(calc('30 / 5')).toEqual('30 / 5 = 6');
    });
  });
  test('If taken not string then return null', () => {
    expect(calc(12)).toBeNull();
    expect(calc({})).toBeNull();
    expect(calc(undefined)).toBeNull();
  });
});
