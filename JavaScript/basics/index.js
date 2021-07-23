const superRound = (fractionalNum, numberDigitsAfterDot) => {
  const coefForRounding = 10 ** numberDigitsAfterDot;
  return [].concat(
    Math.floor(fractionalNum * coefForRounding) / coefForRounding,
    Math.round(fractionalNum * coefForRounding) / coefForRounding,
    Math.ceil(fractionalNum * coefForRounding) / coefForRounding,
    Math.trunc(fractionalNum * coefForRounding) / coefForRounding,
    Number(fractionalNum.toFixed(numberDigitsAfterDot))
  );
};

console.log(superRound(-1.455454, 3));
