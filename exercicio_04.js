// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js

const prompt = require('prompt-sync')();

// solicitar um número ao usuário

const numero = Number(prompt("Digite um número para calcular fatorial: "));

function fatorial(n){

    if (n === 0){
    return 1;

 } 
 
 return n*fatorial(n-1);

}

if (numero < 0){
    console.log ("Não é possível calcular fatorial de número negativo. Por favor, escolha um novo valor.")
    
 } else {
    const resultado = fatorial(numero)
    console.log(`O fatorial de ${numero} é ${fatorial(numero)}.`);
}
