//################################################################################
// EJERCICIO A
// Generar un vector "temperaturas" de 7 valores aleatorios entre -5 y 35 grados.
// Mostrar cada temperatura junto con su equivalente en Fahrenheit y si es
// "Fría", "Templada" o "Calurosa".
//################################################################################
const temperaturas = Array.from({length: 7}, () => Math.floor(Math.random()*41)-5)

//for (let i = 0; i < 7; i++) {
//    temperaturas[i] = Math.random() * 41 - 5
//}
for (let x of temperaturas) {
    const fahrenheit = (x * 9/5) + 32;

    console.log(`Celsius: ${x.toFixed(2)} \nFahrenheit: ${fahrenheit.toFixed(2)}`);

    if (x < 10) {
        console.log("Fría\n");
    } else if (x <= 20) {
        console.log("Templada\n");
    } else {
        console.log("Calurosa\n");
    }

    const categoria = t < 10 ? "Fría" : t > 20 ? "Calurosa" : "Templada"
    console.log(categoria)
}

const temperaturas = Array.from({length:7}, () => Math.floor(Math.random()*41)-5)

const reporte = temperaturas.map(celsius => {
    const fahrenheit = (celsius * 9 / 5) + 32
    let categoria = ''
    if(celsius < 15){
        categoria = 'Fría'
    }else if(celsius >= 25){
        categoria = 'Calurosa'
    }else{
        categoria = 'Templada'
    }

    return{celsius: `${celsius}ºC`, fahrenheit: `${fahrenheit}`, categoria}
})

console.log(reporte)