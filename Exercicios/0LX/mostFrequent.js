const encontrarMaisFrequente = (array) => {
  let frequencias = {};
  let maisFrequente = array[0];
  let maiorContagem = 0;

  // Contabilizando a frequência de cada número
  for (let num of array) {
    frequencias[num] = (frequencias[num] || 0) + 1;

    // Atualizando o número mais frequente
    if (frequencias[num] > maiorContagem) {
      maiorContagem = frequencias[num];
      maisFrequente = num;
    }
  }

  return maisFrequente;
};

console.log(encontrarMaisFrequente([1, 3, 2, 3, 4, 1, 5, 2, 3, 3, 4]));
