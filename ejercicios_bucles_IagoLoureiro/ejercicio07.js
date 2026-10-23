//################################################################################
// Dado un array de precios base de alquiler de pistas:
// const preciosBase = [20, 15, 30, 25];
// Utiliza un bucle para modificar el array original aplicando un 20% de descuento
// a cada tarifa por tratarse de la "Semana del Socio".
//################################################################################
// Escribe tu código aquí


const preciosBase = [20, 15, 30, 25];

for(let p of preciosBase){
    p -= p * 0.20;
    console.log(`${p}`)
}
