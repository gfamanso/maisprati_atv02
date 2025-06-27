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
  // Criar um objeto vazio para armazenar resultado
  const obj = {};
  
  // Percorrer cada par no array 'pares'
  for (let i = 0; i < pares.length; i++) {
    // pegar a chave e o valor do par atual
    const chave = pares[i][0];
    const valor = pares[i][1];
    
    // adicionar essa chave e valor ao objeto
    obj[chave] = valor;
  }
  
  // retornar o objeto montado
  return obj;
}

function objetoParaPares(obj) {
  // Criar um array vazio para armazenar os pares
  const pares = [];
  
  // Percorrer as propriedades do objeto
  for (let chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      // pegar o valor da chave atual
      const valor = obj[chave];
      
      // adicionar um array [chave, valor] no array pares
      pares.push([chave, valor]);
    }
  }
  
  // retornar o array de pares
  return pares;
}


console.log("Objeto:", obj);

console.log("Pares:", paresNovos);