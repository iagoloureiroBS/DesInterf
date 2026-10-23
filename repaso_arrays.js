
const clase = ["a", "b"]

const clase2 = ["A",
    "B"]

const clase3 = new Array("a", "b")

const clase4 = new Array(4)

const clase5 = new Array(4, 3, 2, 1)

const clase6 = []


clase.push("c") // Añadir Ultimo
clase.pop()    // Eliminar Ultimo

clase.unshift("c") // Añadir primero
clase.shift() // Eliminar primero

console.log(clase.splice(1, "b", "X")) // Sustituir "b" por "X"
console.log(clase.copyWithin(1,1))  // Copiar a partir de durante
console.log(clase3.concat(clase2))  // Concatenar
console.log(clase3.join('*'))   // Separar palabras por *

