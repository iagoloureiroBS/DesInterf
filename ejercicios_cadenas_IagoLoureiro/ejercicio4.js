//################################################################################
// Un cliente introduce las observaciones o requisitos especiales para su reserva en una frase.
// Realiza un programa que cuente e imprima cuántas palabras contiene dicha frase.
//################################################################################
// Escribe tu código aquí


let observaciones = prompt("Dígame sus observaciones o requisitos en una frase: ")


console.log(`Numero de palabras: ${observaciones.trim().split(" ").length}`)