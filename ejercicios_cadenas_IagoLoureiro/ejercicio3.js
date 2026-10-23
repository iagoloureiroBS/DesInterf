//################################################################################
// Se solicita el código de seguridad de una taquilla y un carácter alfabético
// (debes validar que sea una única letra). El programa debe contar y mostrar
// cuántas veces aparece dicha letra dentro del código sin diferenciar mayúsculas de minúsculas.
//################################################################################
// Escribe tu código aquí


let codigo = prompt("Dime el código de tu taquilla: ")
let caracter = prompt("Dime el carácter a contar: ")
let cont = 0

caracter.match(/^[a-zA-Z]$/)
const expresion = new RegExp(caracter, gi)
taquilla.match(expresion)

for (const c of codigo) {
    if(c.toLowerCase() === caracter.toLowerCase()){
        console.log(c)
        cont++
    }
}
console.log(`Contador de ${caracter.toUpperCase()}s: ${cont}`)
