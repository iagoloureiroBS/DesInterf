//################################################################################
// EJERCICIO G
// Declarar dos vectores de 5 enteros, pedir sus valores y calcular:
// vector3 = producto elemento a elemento, y la suma total (producto escalar).
//################################################################################
let a = Array.from({length:5}, () => parseInt(prompt("Dime los valores del vector a: ")))
let b = Array.from({length:5}, () => parseInt(prompt("Dime los valores del vector b: ")))

const c = a.map((val, i) => val * b[i]);


const productoEscalar = c.reduce((acc, val) => acc + val, 0);

console.log("Vector 3:", c);
console.log("Producto Escalar:", productoEscalar);