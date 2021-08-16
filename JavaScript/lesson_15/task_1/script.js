/* eslint-disable no-plusplus */
export function makeCounter() {
  let counter = 0;
  return function () {
    return counter++;
  };
}
