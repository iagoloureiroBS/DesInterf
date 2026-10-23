//################################################################################
// EJERCICIO D
// Vector de hasta 7 elementos. Pedir números hasta llenarlo o hasta que se
// introduzca un 0. Mostrar los elementos introducidos y su suma.
//################################################################################
let sum = 0
let n = []
let n2

do {
    n2 = parseInt(prompt(`Dime un número (0 para salir): `))
    if (n2 !== 0) {
        n.push(n2) 
        sum += n2
    }
} while (n.length < 7 && n2 !== 0)

console.log(n)
console.log("-".repeat(30))
console.log(`Suma: ${sum}`)