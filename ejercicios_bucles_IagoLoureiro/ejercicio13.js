//################################################################################
// El recepcionista introduce los cobros en metálico de la jornada en el TPV de ReservaYa.
// El programa pide importes en euros hasta que se introduce un 0.
// Al terminar, debe imprimir la recaudación total y el ticket medio por cobro.
//################################################################################
// Escribe tu código aquí
let cobroDia = -1
let sum = 0
let n = 0

do{
    cobroDia = parseInt(prompt("Dime el cobro de hoy [0 para salir]: "))
    if(cobroDia != 0){
        sum += cobroDia
        n++
    }
}while(cobroDia != 0)

console.log(`Recaudación Total: ${sum}\nMedia de cobro: ${sum/n}`)
