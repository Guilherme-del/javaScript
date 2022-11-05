export function calculaTopOcorrenciasDeQueries(texto,queries,k) {
  let qtdeOcorrencias = new Array;
  let ocorrenciasParaCrescente = new Array;
  let resultadoFinal = new Array;

// adiciona elementos a um array auxiliar
 for (let i=0;i<queries.length;i++){
     qtdeOcorrencias.push(0)
  }
console.log(qtdeOcorrencias)
  for (let i=0;i<queries.length;i++){
     for (let k=0;k<texto.length;k++){
         if (texto.substring(k,queries[i].length+k)==queries[i])
              qtdeOcorrencias[i]++
      }
  }
  for (let i=0;i<qtdeOcorrencias.length;i++){
      ocorrenciasParaCrescente.push(qtdeOcorrencias[i])
  }
  ocorrenciasParaCrescente.sort((a,b)=>b-a)
  for (let i=0;i<k;i++){
      for (var z=0;z<qtdeOcorrencias.length;z++){
              if (qtdeOcorrencias[z]==ocorrenciasParaCrescente[i])
                  resultadoFinal.push(queries[z])
      }
      if (ocorrenciasParaCrescente[i]==ocorrenciasParaCrescente[i+1])
          resultadoFinal.pop()
  }
  return resultadoFinal
}