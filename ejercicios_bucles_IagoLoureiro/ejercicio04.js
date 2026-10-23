//################################################################################
// Tienes un array con los importes recaudados por cada reserva durante una jornada:
// const ingresos = [15, 20, 15, 30, 25, 15, 40];
// Utiliza un bucle para calcular la recaudación total del día y la media de ingresos.
//################################################################################
// Escribe tu código aquí

const ingresos = [15, 20, 15, 30, 25, 15, 40];

let sum=0;
let med=0;

for(let i of ingresos){
    sum += i;
}
med = sum/ingresos.length;

console.log(`Media: ${med}
    \nSuma Total: ${sum}`)