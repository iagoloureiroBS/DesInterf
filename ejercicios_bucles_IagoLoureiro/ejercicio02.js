//################################################################################
// Simula el proceso de verificación de pago de una reserva. Mediante un bucle while,
// simula una petición en la que se comprueba el estado de la reserva.
// El bucle debe continuar pidiendo confirmación hasta que el estado cambie a "confirmada".
//################################################################################
// Escribe tu código aquí

let estadoReserva = "pendiente";
let intentos = 0;

while (estadoReserva != "confirmada") {
    intentos++;
    console.log(`Intento ${intentos}: Comprobando estado de la reserva...`);
    
    
    if (intentos == 3) {
        estadoReserva = "confirmada";
    }
}

console.log("¡Pago verificado! La reserva está confirmada.");