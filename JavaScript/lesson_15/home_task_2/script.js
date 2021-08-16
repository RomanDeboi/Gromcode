export function createLogger() {
  const memory = [];
  function writeInMemory(message, type) {
    memory.push({
      message,
      dateTime: new Date(),
      type,
    });
  }

  function sortArray(array) {
    return array.sort(
      (recordOfMemory, nextRecordOfMemory) =>
        nextRecordOfMemory.dateTime - recordOfMemory.dateTime
    );
  }

  return {
    warn(message) {
      writeInMemory(message, 'warn');
    },
    error(message) {
      writeInMemory(message, 'error');
    },
    log(message) {
      writeInMemory(message, 'log');
    },
    getRecords(typeOfRecord) {
      if (typeOfRecord === undefined) {
        return sortArray(memory);
      }
      return sortArray(
        memory.filter((recordOfMemory) => recordOfMemory.type === typeOfRecord)
      );
    },
  };
}
