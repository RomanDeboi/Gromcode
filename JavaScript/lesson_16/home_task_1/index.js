export function createArrayOfFunctions(dimension) {
  const arr = [];
  if (dimension === undefined) return arr;
  if (!Number.isInteger(dimension)) return null;

  for (let i = 0; i < dimension; i++) {
    arr[i] = function () {
      return i;
    };
  }
  return arr;
}
