export function shuffleMusicas(musicasTocadas) {
  let resultadoFinal = new Array;
  const numeroDeMusicas = musicasTocadas.length;

  const ordenacaoPeso = musicasTocadas.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  const menoresPesos = ordenacaoPeso.slice(0, numeroDeMusicas / 2);
  const maioresPesos = ordenacaoPeso.slice(numeroDeMusicas / 2).reverse();

  for (let i = 0; i < numeroDeMusicas / 2; i++) {
    maioresPesos[i] !== undefined ? resultadoFinal.push(maioresPesos[i]) : 0;
    menoresPesos[i] !== undefined ? resultadoFinal.push(menoresPesos[i]) : 0;
  }

  return resultado;
}