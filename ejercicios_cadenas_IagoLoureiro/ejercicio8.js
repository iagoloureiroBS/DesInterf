//################################################################################
// Un sistema de lector óptico de tarjetas de socio lee los nombres con las mayúsculas
// y minúsculas invertidas. Realiza un programa que lea la cadena y convierta las
// mayúsculas a minúsculas y las minúsculas a mayúsculas.
//################################################################################
// Escribe tu código aquí


let cadea = prompt("Dime una cadena: ")

cadea = cadea.split('')
.map(car => car === car.toUpperCase() ? car.toLowerCase() : car.toUpperCase())
.join('')

console.log(cadea)