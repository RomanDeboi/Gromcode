/* eslint-disable no-plusplus */
import { makeCounter } from './script.js';

describe('Tesring of "makeCounter" function', () => {
  const counter = makeCounter();

  test('Must return function', () => {
    expect(typeof counter).toBe('function');
  });

  test('Returned function must do increment on each call and start with 0', () => {
    for (let i = 0; i < 10; i++) {
      expect(counter() === i).toBeTruthy();
    }
  });

  test('Counters created by function must be independent', () => {
    const counter2 = makeCounter();
    for (let i = 0; i < 10; i++) {
      counter();
    }
    expect(counter() === counter2()).toBeFalsy();
  });
});
