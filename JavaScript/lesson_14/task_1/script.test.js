import { message, sendMessage, setMessage } from './script.js';

describe('Test of functions of lesson 14', () => {
  describe('Test of "sendMessage" function', () => {
    test('Take name of recipient and return message', () => {
      expect(jest.fn(sendMessage('Ann'))).toBe(
        'Ann, Just learn it! Your Gromcode'
      );
    });
  });
  describe('Test of "setMessage" function', () => {
    test('Take text of new message and assign it to variable "message"', () => {
      setMessage('Hello');
      expect('Hello').toEqual(message);
    });
  });
});
