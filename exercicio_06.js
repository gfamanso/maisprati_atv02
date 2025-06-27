// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js

const prompt = require('prompt-sync')();

// solicitar um número ao usuário

const numero = Number(prompt("Digite um número para calcular fatorial: "));

function fatorial(n) {

    if (n ===0) 
        return 1;

    return n * fatorial(n-1);
    
    }


function memoize(fn) {
    const cache = {};

    return function(n) {
        if (cache[n]){
            console.log("Resultado que vem do cache.")
            return cache[n];
        }

        const resultado = fn(n);
        cache[n] = resultado;
        return resultado;
    }

}

const fatorialMemoizado = memoize(fatorial);

const resultado1 = fatorialMemoizado(numero); // calcula
const resultado2 = fatorialMemoizado(numero); // vem do cache

console.log(`O fatorial de ${numero} é ${fatorialMemoizado(numero)}.`);

console.log(`Primeiro cálculo: ${resultado1}`);
console.log(`Segundo cálculo (do cache): ${resultado2}`);