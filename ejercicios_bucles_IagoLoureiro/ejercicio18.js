//################################################################################
// El departamento de seguridad exige validar los límites de aforo autorizados.
// Pide el límite inferior y superior del aforo (si el inferior es mayor, vuelve a pedirlo).
// A continuación introduce el número de espectadores de cada partido hasta pulsar 0.
// El programa informará de:
//  * La suma total de espectadores dentro del intervalo abierto.
//  * Cuántos partidos quedaron fuera del rango.
//  * Si algún partido registró exactamente el aforo de los límites.
//################################################################################
// Escribe tu código aquí

let min
let max

do{
    min = parseInt(prompt("Dime el límite mínimo: "))
    max = parseInt(prompt("Dime el límite máximo: "))
}while(min > max || min < 0 || max == 0)

let nEspectadores = -1
let sum = 0
let contFuera = 0
let contComp = 0

    do{
        do{
        nEspectadores = parseInt(prompt("Dime el número de espectadores [0 -> salir]:"))
        }while(nEspectadores < 0)

        sum += nEspectadores

        if(nEspectadores < min || nEspectadores > max){
            contFuera++
        } else if(nEspectadores == max){
            contComp++
        }

    }while(nEspectadores != 0)
        console.log(`DATOS PARTIDOS:\n
            ======================================\n
            Suma Total: ${sum}\n
            Partidos fuera del rango: ${contFuera}
            Partidos Llenos: ${contComp}`)




