//################################################################################
// Para generar un token codificado de confirmación de pista, el sistema toma el
// nombre de la pista y genera una nueva cadena invirtiendo todos sus caracteres.
//################################################################################
// Escribe tu código aquí


let pista = prompt(`Dime el nombre de la pista: `)

console.log(pista.split("").reverse().join(""))
