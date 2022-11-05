export function calculaNumeroDaSenha(senha) {
  const aux = new Array;
  const verdadeiroBinario = new Array;
  
 for (let i = 0; i < Object.entries(senha).length;i++ ){
  senha.map((binColuna,idx)=>{ 
    aux.push(binColuna[i])   
  }) 
    const finalBin = aux.join("");
   // verifica a ocorrencia de zeros e um
    const ocorrenciasDeZeros = (finalBin.match(/0/g) || []).length;
    const ocorrenciasDeUm = (finalBin.match(/1/g) || []).length;  
     //adiciona ao novo array
     if (ocorrenciasDeZeros <= ocorrenciasDeUm) {
      verdadeiroBinario.push(1)
    }
    else{
      verdadeiroBinario.push(0)
    }   
     aux.splice(0,aux.length);
     
 }
  const finalBin = verdadeiroBinario.join("");
  return (parseInt(finalBin, 2))
}