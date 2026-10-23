//################################################################################
// EJERCICIO B
// Crear un vector de 5 cadenas leídas por teclado. Copiarlas en otro vector
// pero invertidas letra a letra, y mostrar ambos vectores.
//################################################################################
const cads = Array.from({length: 5}, (_,i) => prompt(`Dime la ${i}º cadena: `))

const cads2 = cads.map(x => [x, x = x.split("").reverse().join("")])

console.log(cads2)