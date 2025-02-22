contarPalavras = (frase) => {
    let palavras = frase.split(" ");
    let contagem = {};
    palavras.forEach(palavra => {
        if (contagem[palavra]) {
            contagem[palavra]++;
        } else {
            contagem[palavra] = 1;
        }
    });

    return contagem;
}

console.log(contarPalavras("o rato roeu a roupa do rei de roma o rato era esperto"));