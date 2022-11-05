export function menorStringMaior(name) {
  const nameToArray = name.split("");
 
   const permutador = (arrayAPermutar) => {
     let resultado = new Array;
 
     const permuta = (array, m = []) => {
       if (array.length === 0) {
         resultado.push(m.join(""));
       } else {
         for (let i = 0; i < array.length; i++) {
           let atual = array.slice();
           let proximo = atual.splice(i, 1);
           permuta(atual.slice(), m.concat(proximo));
         }
       }
     };
     permuta(arrayAPermutar);
     return resultado;
   };
 
   const permutacoesDeNome = Array.from(new Set(permutador(nameToArray).sort()));
 
   const IndexDeNomeNoArray = permutacoesDeNome.findIndex((index) => {
     return index === name;
   });
 
   return permutacoesDeNome[IndexDeNomeNoArray + 1]
     ? permutacoesDeNome[IndexDeNomeNoArray + 1]
     : "sem resposta";
 }