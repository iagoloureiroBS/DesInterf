//################################################################################
// El sistema de taquillas automáticas de ReservaYa necesita generar N códigos
// de acceso seguros. Un código seguro es aquel número que solo se puede dividir
// exactamente por 1 y por sí mismo (números primos).
// Solicita al usuario por teclado cuántos códigos de taquilla desea mostrar.
//################################################################################
// Escribe tu código aquí

let N = parseInt(prompt("¿Cuantos códigos necesitas que genere?"))
let cont = 0
let numPrimo = 2

do{
    if (esPrimo(numPrimo)) {
        console.log(numPrimo);
        cont++; 
    }
    numPrimo++; 
} while(cont < N) 


function esPrimo(num){
    if(num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0){
            return false
        }
    }
    return true
}
