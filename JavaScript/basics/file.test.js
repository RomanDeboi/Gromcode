const getEvenNumbers = (arrOfNumbers) =>
  arrOfNumbers.filter((number) => number % 2 === 0);

describe('Тест 1', () => {
  test('17 дорівнює 17', () => {
    expect(17).toEqual(17);
  });
  test('18 не дорівнює 17', () => {
    expect(18).not.toEqual(17);
  });
  test('Функція приймає масив чисел і повертає масив парних чисел', () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });
});
