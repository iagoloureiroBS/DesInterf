//################################################################################
// EJERCICIO E
// Vector de 7 números aleatorios (0-50). Ordenar de mayor a menor y calcular
// la mediana.
//################################################################################
let n = Array.from({length:7}, () => Math.floor(Math.random() * 50))


console.log(n)

n.sort((a, b) => b-a)
const mediana = n[Math.floor(n.length / 2)];


console.log(n)
console.log("=".repeat(30))
console.log(`Mediana: ${mediana}`);
