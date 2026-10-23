//################################################################################
// ¡Promoción ReservaYa! Si adivinas el número de la Pista Mágica (del 1 al 100)
// obtienes una reserva gratuita. Tienes un máximo de 10 intentos.
// Tras cada intento, el sistema te indicará si el número buscado es mayor o menor.
// El programa termina cuando acertaste o al agotar los 10 intentos.
//################################################################################
// Escribe tu código aquí


let numSuerte = Math.floor(Math.random() * 100) +1
let numIntento = 0
let intentos = 10
do{
numIntento = parseInt(prompt("Dime un número entre el 1 y el 100: "))
if(numSuerte > numIntento){
    console.log("El número secreto es mayor.")
    intentos--
} else if(numSuerte < numIntento){
    console.log("Es número secreto es menor.")
    intentos--
}
}while(numSuerte != numIntento && intentos > 0)

if(intentos == 0){
    console.log(`HAS PERDIDO. EL NUMERO ERA: ${numSuerte}`)
} else{console.log(`HAS GANADO; ${numSuerte}`)}