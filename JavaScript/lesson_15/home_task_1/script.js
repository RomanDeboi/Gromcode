export function createCalculator() {
  return {
    memory: 0,

    add(number) {
      this.memory += number;
    },

    decrease(number) {
      this.memory -= number;
    },

    reset() {
      this.memory = 0;
    },

    getMemo() {
      return this.memory;
    },
  };
}
