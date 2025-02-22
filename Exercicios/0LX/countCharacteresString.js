function contarCaracteres(palavra) {
  const resultado = palavra.split("").reduce((data, letra) => {
    data[letra] = data[letra] ? data[letra] + 1 : 1;
    return data;
  }, {});
  return resultado;
}

console.log(contarCaracteres("banana"));
console.log(contarCaracteres("apple"));