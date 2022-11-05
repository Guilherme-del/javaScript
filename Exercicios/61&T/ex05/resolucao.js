export function calculaPorcentagemSorteio(assinante,minutosAssistidos) {
  let horasAssistidas = new Array;
  let porcentagem = new Array; 
  let somaArray = 0;
  
  for (let i=0;i<assinante.length;i++){
      horasAssistidas[i]=Math.ceil(minutosAssistidos[i]/60)
      if (assinante[i])
          horasAssistidas[i]*= 2
      somaArray+= horasAssistidas[i]
  }
  for (let i=0;i<horasAssistidas.length;i++)
    porcentagem[i]=Math.round((horasAssistidas[i]/somaArray)*100)
          
  return porcentagem
}