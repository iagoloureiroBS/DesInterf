//################################################################################
// Un usuario introduce su nombre y dos apellidos para el registro de ReservaYa.
// Crea un programa que extraiga e imprima las iniciales en mayúsculas para generar
// su avatar de perfil.
//################################################################################
// Escribe tu código aquí


let nombre = prompt("Dime tu nombre: ")
let ap1 = prompt("Tu primer apellido: ")
let ap2 = prompt("Tu segundo apellido: ")

console.log(`AVATAR: ${nombre.charAt(0).toUpperCase() + ap1.charAt(0).toUpperCase() + ap2.charAt(0).toUpperCase()}`)