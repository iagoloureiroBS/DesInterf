let cont = 0

function myFunction() {
    const tareas = ["Estudiar", "Practica python", "Tarefas Dart"]
    const ul = document.getElementById("lista")
    

    if(tareas[cont] == undefined){cont = 0}
        let node = document.createElement("li")
        let textnode = document.createTextNode(tareas[cont])
        ul.appendChild(node).appendChild(textnode)
        

    cont++;
}


