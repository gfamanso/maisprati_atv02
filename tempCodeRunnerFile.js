// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js

const prompt = require('prompt-sync')();



const numeroSecreto = gerarNumeroAleatorio();

// gerar um número aleatório entre 1 e 100
function gerarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

let chute = undefined;
let tentativas = 0;

while (chute !== numeroSecreto) {
    chute = Number(prompt("Escolha um número inteiro entre 1 e 100: "));

    if (isNaN(chute) || chute < 1 || chute > 100 || !Number.isInteger(chute)) {
    console.log("Entrada inválida. Digite um número inteiro de 1 a 100.");
    continue; 
    }

    tentativas++;

    if (chute < numeroSecreto) {
        console.log ("Escolha um número maior!");
    } else if (chute > numeroSecreto){
        console.log ("Escolha um número menor!")
    } else {
        console.log (`Acertou o número secreto em ${tentativas} tentativas. Parabéns!`)
    }
}