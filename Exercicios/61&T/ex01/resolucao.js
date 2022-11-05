export function ultimaParada(combustivel,consumo,postosDeGasolina) {
  aux = new Array;
  // quantos km ele conseguirá percorrer;
  const qtdeDeKm = combustivel * consumo;
  //verifica se tem posto de gasolina ou se ele tem combustivel disponivel
  if (Object.entries(postosDeGasolina).length > 0 || qtdeDeKm > 0){
  //percorre pelo parametro(array) postosDeGasolina;
  postosDeGasolina.map((distancia,idx)=> { 
    //se der para percorrer a quantidade de km ele adiciona no array auxiliar
       if(qtdeDeKm >= distancia ) {
           aux.push(distancia)
          }       
  }) 
    //retorna o maior valor dos que ele consegue percorrer
    var maximoPossivel = aux.reduce(function(a, b) {
      return Math.max(a, b);
    }, -1);
     return (maximoPossivel);
  }
  else {
       return(-1)
    } 
}