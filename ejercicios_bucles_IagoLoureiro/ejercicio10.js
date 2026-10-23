//################################################################################
// ReservaYa necesita calcular cuántas combinaciones únicas de partidos se pueden
// formar en la fase final de un torneo con N equipos participantes (factorial de N).
// Crea un programa que pida el número de equipos (entero positivo) y calcule el total
// de combinaciones posibles.
//################################################################################
// Escribe tu código aquí


let nEquipos = parseInt(prompt("Dime el número de equipos: "))
let fac = 1;
for (let i = nEquipos; i > 0; i--) {
    fac *= i
}
console.log(`Combinaciones posibles: ${fac}`)
