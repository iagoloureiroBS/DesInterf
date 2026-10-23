//################################################################################
// El sistema de filtrado de ReservaYa debe comprobar si un código de reserva
// introducido por el usuario comienza por el prefijo de la zona correspondiente
// (por ejemplo, comprobar si "PAD-1023" empieza por "PAD").
// Usa el método startsWith para verificarlo e imprimir el resultado.
//################################################################################
// Escribe tu código aquí


let codigo = prompt("Dime tu código de reserva: ")

if(codigo.startsWith("PAD")){
    console.log("ACEPTADO")
}else{console.log("RECHAZADO")}

