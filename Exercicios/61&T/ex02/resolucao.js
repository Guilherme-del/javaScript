export function retornaMenorEMaiorValorDeVendas(tickets) {
  const aux = new Array;
  const vendaFinal = new Array;
  //verifica se possui algum item
  if(Object.entries(tickets).length > 0){
    tickets.map((maiorElemento,idx)=> {
      //verifica se é nestedArray
      if (Object.entries(maiorElemento).length > 1){
        maiorElemento.map((itemAserInserido,index)=> {
          if (itemAserInserido >= 20 && itemAserInserido <= 500) {
            aux.push(itemAserInserido)        
          }
        })
      }
      //quando é um array simples ele só ira verificar se o auxiliar é maior
      else{
         if (maiorElemento[0] >= 20 && maiorElemento[0] <= 500) {
            aux.push(maiorElemento[0])
          }
      }   
    } )
    //verifica o maior e o menor valor entre os possiveis
    const vendaMinima = Math.min(...aux);
    const vendaMaxima = Math.max(...aux);
    vendaFinal.push(vendaMinima,vendaMaxima)
    return vendaFinal
                                                                                                     
  }
  //array não possui items
  else {
    return 0;
  }
  
  
}