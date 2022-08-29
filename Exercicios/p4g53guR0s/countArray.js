/*
conta quantas vezes cada palavra aparece no array
*/
function countWordsArray(a) {
  const newObj = new Object(); //criação de um objeto auxiliar
  for (let i = 0; i < a.length; i++) {
    //passa dentro do loop a quantidade de palavras que tem no array
    if (newObj[a[i]] === undefined) {
      // verifica se ja tem no objeto a palavra
      newObj[a[i]] = 1; // se não tiver adiciona no array
    } else {
      newObj[a[i]]++; // se tiver ele soma mais um
    }
  }
  return newObj;
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
const result = countWordsArray(a);

console.log(`finalObject = ${JSON.stringify(result)}`);
