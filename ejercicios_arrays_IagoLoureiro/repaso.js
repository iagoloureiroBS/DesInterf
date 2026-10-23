const avenger = {
    nome: 'Steve',
    clave: 'Capitán América',
    poder: 'Drogas'
}

console.log(avenger.nome)
console.log(avenger.clave)
console.log(avenger.poder)

const extraer = (avenger) => {
    let {nombre, clave, poder} = avenger

    console.log(nome)
    console.log(clave)
    console.log(poder)

}

extraer(avenger)

const extraer2 = (nome, clave, poder) => {
    console.log(nome)
    console.log(clave)
    console.log(poder)
}

extraer2(avenger)

const avengers = ['Thor', 'Ironman', 'Spiderman']
console.log(avengers[0])

const[Thor, Ironman, Spiderman] = avengers;

console.log(Thor)
console.log(Ironman)

const [,, spidi] = avengers
console.log(spidi)

const extraerArray = ([t,i,s]) => {
    console.log(t)
    console.log(i)
    console.log(s)
}

extraerArray(avengers)


function activar (quien, objeto = batiseñal) {
    console.log(`${quien} activou o sinal ${objeto}`)
}

activar("Gordon", "alarma")
activar("Gordon")

var hulk = {
    nombre: 'Hulk',
    smash: function(){
        setTimeout(() => {
            console.log(this.nombre + "smash!!!")
        }, 1000)
    }
}

hulk.smash()