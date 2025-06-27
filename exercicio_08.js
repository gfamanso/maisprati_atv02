const vendas = [
  { cliente: 'Lais', total: 100 },
  { cliente: 'Neusa', total: 50 },
  { cliente: 'Lais', total: 200 },
  { cliente: 'Celina', total: 75 },
  { cliente: 'Celina', total: 150 },
  { cliente: 'Neusa', total: 50 }
];


const totaisPorCliente = vendas.reduce((acumulado, vendaAtual) => {
 
  const nomeCliente = vendaAtual.cliente;
  
  
  if (acumulado[nomeCliente]) {
    
    acumulado[nomeCliente] += vendaAtual.total;

  } else {
    
    acumulado[nomeCliente] = vendaAtual.total;
  }
  
  
  return acumulado;
}, new Object()); 

console.log(totaisPorCliente);