import createMessenger from './script.js';

describe('Testing of functions from lesson 14 task 2', () => {
  describe('Testing of function "createMessenger"', () => {
    const messenger = createMessenger();
    console.log = jest.fn();

    test('Must create object with methods and properties', () => {
      expect(
        Object.keys(messenger).join(' ') ===
          'message sender sendMessage setMessage setSender' // names of messenger's propeties
      ).toBeTruthy();
    });

    test('Created by function messengers must be independent', () => {
      const messenger2 = createMessenger();
      messenger.setSender('John');
      messenger2.setSender('Mike');
      messenger.setMessage('Good morning');
      messenger2.setMessage('Hi');
      expect(messenger.sender).toBe('John');
      expect(messenger2.sender).toBe('Mike');
      expect(messenger.message).toBe('Good morning');
      expect(messenger2.message).toBe('Hi');
    });

    describe('Test of "sendMessage" method', () => {
      test('Take name of recipient and return message', () => {
        messenger.message = 'Just learn it';
        messenger.sender = 'Gromcode';
        console.log.mockClear();
        messenger.sendMessage('Ann');
        expect(console.log.mock.calls[0][0]).toBe(
          'Ann, Just learn it! Your Gromcode'
        );
      });
    });
    describe('Test of "setMessage" method', () => {
      test('Take text of new message and assign it to property "message"', () => {
        messenger.setMessage('Hello');
        console.log.mockClear();
        messenger.sendMessage('Ann');
        expect(
          console.log.mock.calls[0][0].includes('Ann, Hello! Your')
        ).toBeTruthy();
      });
    });

    describe('Test of "setSender" method', () => {
      test('Take name of new sender and assign it to property "sender"', () => {
        messenger.setSender('John');
        console.log.mockClear();
        messenger.sendMessage('Ann');
        expect(
          console.log.mock.calls[0][0].includes('! Your John')
        ).toBeTruthy();
      });
    });
  });
});
