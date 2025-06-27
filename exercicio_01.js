// importar a biblioteca prompt-sync para capturar a entrada do usuário no terminal do Node.js

const prompt = require('prompt-sync')();

// solicitar uma data ao usuário

const dia = Number(prompt("Digite o dia: "));
const mes = Number(prompt("Digite o mês: "));
const ano = Number(prompt("Digite o ano: "));

function ehDataValida(dia, mes, ano) {
 
    //testar se dia, mês e ano são números
    // se dia não é zero
    // se mês informado está entre 1 e 12
    // se ano é diferente de zero
    if (typeof dia !== "number" || typeof mes !== "number" || typeof ano !== "number" || dia < 1 || mes < 1 || mes > 12 || ano < 1) {
        return false;
    }

    //definir quantos dias tem cada mês (jan, fev, mar, [...], dez)

    let diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    //condição para ano bissexto: ano é divisível por 4 e não é divisível por 100 ou for divisível por 400

    let  bissexto = false;

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        bissexto = true;
        diasNoMes[1] = 29;
    }

    if (dia > diasNoMes[mes - 1]){
        return false;
    }

    return true;

}

if (ehDataValida(dia, mes, ano)) {
  console.log(`A data ${dia}/${mes}/${ano} é válida.`);

   if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(`O ano ${ano} é bissexto.`);
   } else {
    console.log(`O ano ${ano} não é bissexto.`);
   }
} else {
  console.log(`A data ${dia}/${mes}/${ano} é inválida.`);

}