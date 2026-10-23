//################################################################################
// El terminal de control del marcador electrónico de una pista necesita procesar
// el código identificador de una reserva escribiendo en consola cada carácter
// en una línea independiente mediante un bucle for.
//################################################################################
// Escribe tu código aquí

let cadena = prompt("Dime el código identificador: ")

for (let c of cadena) {
    console.log(c)
}
