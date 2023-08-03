// Mais de um valor
const x = 10;
const y = "Luiz";
const z = [1, 2];

console.log(x, y, z);

// Contagem de Impressões
console.count(`O valor de x é: ${x}, contagem `);
console.count(`O valor de x é: ${x}, contagem `);
console.count(`O valor de x é: ${x}, contagem `);

// Variáveis entre string
console.log("O nome é %s e ele é programador!", y);

// Limpar o console
setTimeout(() => {
  console.clear();
}, 2000);
