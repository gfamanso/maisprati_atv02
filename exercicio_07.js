

const produtos = [
  { nome: "Processador", preco: 1000 },
  { nome: "Placa de vídeo", preco: 2500 },
  { nome: "Memória RAM", preco: 500 },
  { nome: "SSD", preco: 400 },
  { nome: "Placa mãe", preco: 850 },
  { nome: "Fonte", preco: 550 },
  { nome: "Gabinete", preco: 300 }
];

function ordenarNomesPorPreco(lista) {
  const ordenados = lista.sort(function(a, b) {
    return a.preco - b.preco;
  });

console.log(`Os nomes ordenados por preço de forma crescente é: `)

ordenados.forEach(function(produto) {
    const precoFormatado = produto.preco.toFixed(2);
    console.log(`${produto.nome} - R$ ${precoFormatado}`);
  });

const nomes = ordenados.map(function(produto) {
    return produto.nome;
  });

  return nomes;
}


const resultado = ordenarNomesPorPreco(produtos);
console.log(`O array com a sequência apenas dos nomes, ordenados por preço crescente, é: [${resultado}]`);