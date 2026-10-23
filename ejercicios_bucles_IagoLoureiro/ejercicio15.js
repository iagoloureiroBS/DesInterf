//################################################################################
// ReservaYa audita las solicitudes de cancelación de reservas.
// Se pide por teclado la cantidad de solicitudes a revisar.
// El programa debe informar de cuántos balances son positivos (cobro de penalización),
// cuántos son negativos (devolución al cliente) y cuántos son iguales a 0 (cancelación neutra).
//################################################################################
// Escribe tu código aquí

let solicitudes = parseInt(prompt("Dime cuantas solicitudes debo revisar: "))
let balances = new Array(solicitudes);
let contPos = 0
let contNeg = 0
let contBal = 0

for (let i = 0; i < balances.length; i++) {
    let balance = parseInt(prompt(`Dime el ${i+1}º balance: `))
    if(balance > 0){
        contPos++
    }else if(balance < 0){
        contNeg++
    } else{
        contBal++
    }
}
console.log(`Balance: \nPositivos: ${contPos}\nNegativos: ${contNeg}\nNeutros: ${contBal}`)