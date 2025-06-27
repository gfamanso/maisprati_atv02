const pares = [
  ["Processador ", 1000],
  ["Placa de vídeo ", 2500],
  ["Memória RAM ", 500],
  ["SSD ", 400],
  ["Placa mãe ", 850],
  ["Fonte ", 550],
  ["Gabinete ", 300] 
];


const obj = paresParaObjeto(pares);
const paresNovos = objetoParaPares(obj);

function paresParaObjeto(pares) {
  // Cria um objeto vazio para armazenar resultado
  const obj = {};
  
  // Percorre cada par no array 'pares'
  for (let i = 0; i < pares.length; i++) {
    // pega a chave e o valor do par atual
    const chave = pares[i][0];
    const valor = pares[i][1];
    
    // adiciona essa chave e valor ao objeto
    obj[chave] = valor;
  }
  
  // retorna o objeto montado
  return obj;
}

function objetoParaPares(obj) {
  // Cria um array vazio para armazenar os pares
  const pares = [];
  
  // Percorre as propriedades do objeto
  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      // pega o valor da chave atual
      const valor = obj[chave];
      
      // adiciona um array [chave, valor] no array pares
      pares.push([chave, valor]);
    }
  }
  
  // retorna o array de pares
  return pares;
}


console.log("Objeto:", obj);

console.log("Pares:", paresNovos);