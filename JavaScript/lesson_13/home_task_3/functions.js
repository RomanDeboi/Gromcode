export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) return null;
  const copyArr = arr.slice();
  return copyArr.reverse();
};

export const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  if (balances[index] < amount) return -1;
  return balances[index] - amount;
};

export const getAdults = (obj) => {
  const resultObj = {};
  for (let property in obj) {
    if (obj[property] >= 18) resultObj[property] = obj[property];
  }
  return resultObj;
};
