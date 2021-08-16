import { createLogger } from './script.js';

const logger = createLogger();

function includesInMemory(typeOfRecord, messageOfRecord) {
  return logger
    .getRecords(typeOfRecord)
    .some((recordOfMemory) => recordOfMemory.message === messageOfRecord);
}

function allReturnedSuchType(typeOfRecord) {
  return logger
    .getRecords(typeOfRecord)
    .every((recordSuchType) => recordSuchType.type === typeOfRecord);
}

const returnedHaveSuchType = (typeOfRecord) =>
  logger.getRecords().some((record) => record.type === typeOfRecord);

describe('Testing of function "createLogger"', () => {
  test('Must return object with methods', () => {
    expect(
      Object.keys(logger).join(' ') === 'warn error log getRecords'
    ).toBeTruthy();
  });

  describe('Testing of method "warn"', () => {
    test('Taken message in string type and write it to memory', () => {
      logger.warn('Lorem impus dolor set ame warn');
      expect(
        includesInMemory('warn', 'Lorem impus dolor set ame warn')
      ).toBeTruthy();
    });
  });

  describe('Testing of method "error"', () => {
    test('Taken message in string type and write it to memory', () => {
      logger.error('Lorem impus dolor set ame error');
      expect(
        includesInMemory('error', 'Lorem impus dolor set ame error')
      ).toBeTruthy();
    });
  });

  describe('Testing of method "log"', () => {
    test('Taken message in string type and write it to memory', () => {
      logger.log('Lorem impus dolor set ame log');
      expect(
        includesInMemory('log', 'Lorem impus dolor set ame log')
      ).toBeTruthy();
    });
  });

  describe('Testing of method "getRecords"', () => {
    test('Taken type of record and returns array of records with such type', () => {
      expect(allReturnedSuchType('warn')).toBeTruthy();
      expect(allReturnedSuchType('error')).toBeTruthy();
      expect(allReturnedSuchType('log')).toBeTruthy();
    });
    test('If called without argument then returns array of all records', () => {
      expect(
        returnedHaveSuchType('warn') &&
          returnedHaveSuchType('error') &&
          returnedHaveSuchType('log')
      ).toBeTruthy();
    });
  });

  test('Record in memory stores in right format', () => {
    expect(
      Object.keys(logger.getRecords()[0]).join(' ') === 'message dateTime type'
    ).toBeTruthy();
  });

  test('Loggers must be independent', () => {
    const logger2 = createLogger();
    expect(
      logger.getRecords().length !== logger2.getRecords().length
    ).toBeTruthy();
  });
});
