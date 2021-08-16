let memory = 0;

export function add(number) {
  memory += number;
}

export function decrease(number) {
  memory -= number;
}

export function reset() {
  memory = 0;
}

export function getMemo() {
  return memory;
}
