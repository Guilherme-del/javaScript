function countWordsArray(a) {
  const fruits = a.reduce((data, fruit) => {
    data[fruit] = data[fruit] ? data[fruit] + 1 : 1;
    return data;
  }, {});
  return fruits;
}

const a = [
  "Abacaxi",
  "Pera",
  "Abacate",
  "Peru",
  "Abacaxi",
  "Alface",
  "Pera",
  "Abacaxi",
];

console.log(countWordsArray(a));
