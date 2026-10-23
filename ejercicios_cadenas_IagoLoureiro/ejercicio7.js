//################################################################################
// El sistema de códigos promocionales de ReservaYa necesita sustituir un carácter
// obsoleto por uno nuevo dentro del código de cupón.
// Pide el código y dos caracteres alfabéticos (valida que sean letras únicas) y
// reemplaza todas las apariciones del primer carácter por el segundo.
//################################################################################
// Escribe tu código aquí


let codigo = prompt("Dime el codigo del cupón: ")
let car1 = prompt("Dime el primer carácter: [Borrar]")
let car2 = prompt("Dime el segundo carácter: [Añadir]")

codigo.replaceAll(car1, car2)

console.log(`Código cambiado: ${codigo}`)