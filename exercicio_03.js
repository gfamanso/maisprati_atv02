// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js

const prompt = require('prompt-sync')();

const frase = "olá mundo doido demais olá mundo";
//utilizar "espaço" como separador de palavras
const palavras = frase.split(" "); 

const palavrasUnicas = [];


for (let i = 0; i < palavras.length; i++) {
  const palavraAtual = palavras[i];

  
  let encontrada = false;

  for (let j = 0; j < palavrasUnicas.length; j++) {
    if (palavrasUnicas[j] === palavraAtual) {
      encontrada = true;
      break; 
    }
  }
   if (!encontrada) {
    palavrasUnicas[palavrasUnicas.length] = palavraAtual;
  }
}

console.log(palavrasUnicas);