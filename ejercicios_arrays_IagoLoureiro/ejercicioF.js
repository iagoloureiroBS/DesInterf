//################################################################################
// EJERCICIO F
// Pedir un número de día (1-7) y mostrar su nombre y si es fin de semana
// o día laborable, usando un vector.
//################################################################################

const dias = ["Lunes","Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
const finde = ["Sábado", "Domingo"]

let dia = parseInt(prompt("Dime un día por numero: [1-7]"))
dia -= 1

if(finde.includes(dias[dia])){
    console.log(`Día: ${dias[dia]}
                =========================
                FIN DE SEMANA :)`)
}else{
    console.log(`Día: ${dias[dia]}\n=========================\nDIA LABORABLE :(`)
}