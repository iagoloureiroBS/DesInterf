//################################################################################
// EJERCICIO C
// Leer 6 notas (0-10). Mostrar todas, la media, la más alta, la más baja
// y cuántas son aprobado (>=5).
//################################################################################

let notas = Array.from({length: 6}, (_,i) => parseInt(prompt(`Dime la ${i+1}º nota: `)))


let aprobados = notas.filter(x => x >= 5).length
let sum = (notas.reduce((x, y) => x + y, 0))
console.log(sum)
console.log(notas)
console.log("=".repeat(20))
console.log(`Nota Media: ${(sum/notas.length).toFixed(1)}
    \nNota Alta: ${notas.sort((a,b) => a-b)[notas.length-1]}
    \nNota Baja: ${notas.sort((a,b) => b-a)[notas.length-1]}
    \nAlumnos aprobados: ${aprobados}`)
