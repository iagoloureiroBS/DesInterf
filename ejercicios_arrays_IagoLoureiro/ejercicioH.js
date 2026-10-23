//
let matriz = Array.from({length: 4}, () => 
    Array.from({length: 4}, () => Math.floor(Math.random() * 9) + 1))

let diagonalPrincipal = matriz.reduce((suma, fila, i) => suma + fila[i], 0)
let diagonalSecundaria = matriz.reduce((suma, fila, i) => suma + fila[matriz.length - 1 - i], 0)
matriz.map()
console.log(matriz)
console.log(`Principal: ${diagonalPrincipal}
    Secundaria: ${diagonalSecundaria}`)