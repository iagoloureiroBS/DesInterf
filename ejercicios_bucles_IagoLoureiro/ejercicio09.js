//################################################################################
// Diseña un panel de gestión para el recepcionista de ReservaYa.
// Muestra un menú por pantalla que se repita mientras el usuario no elija salir:
// 1. Ver estado de pistas
// 2. Crear nueva reserva
// 3. Cancelar reserva
// 4. Salir
//################################################################################
// Escribe tu código aquí

let con;


do{
console.log("1. Ver estado de pistas")
console.log("2. Crear nueva reserva")
console.log("3. Cancelar reserva")
console.log("4. Salir")
con = parseInt(prompt("Selecciona una opción: "))
}while(con != 4)
    console.log("ADIOS")