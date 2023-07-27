let titulo = document.querySelector("h1");
let parrafo = document.querySelector("p");
let parrafoClass = document.querySelector(".ParrafoClass");
let parrafoID = document.querySelector("#parradoID");
let input = document.querySelector("input");
let span = document.querySelector("span");

console.log(input.value);


console.log({
    titulo, parrafo, parrafoClass, parrafoID, input,
})
// inner.HTML permite modificar el HTML correspondiente al selector que tiene la variable indicada. no es la mejor practica por que pueden ingresar más HTML al proyecto inicial
titulo.innerHTML = "Document Object Model <br> Modelo del Objeto del Documento";
// la mejor practica es usar innerText, esta no permite el ingreso de HTML de etiquetas etc, pero permite modificar el HTML desde JavaScript así como la hece innerHTML
parrafo.innerText = "Esto es un Parrafo desde JavaScript"

// Para leer los atributos que pueda contener una de las etiquetas que esten en el HTML podemos usar getAttribute

console.log(input.getAttribute("Type"));

// Para modificar un atributo de una etiqueta usamos setAttribute

input.setAttribute("Type", "number");

input.setAttribute("placeholder", "Pon tu cedula aquí");

// Para agregar clases a un elemento de HTMl usamos classList.add en el caso de querer eliminar usamos classList.remove
 input.classList.add("Boton");

//  Crear un elemento en HTML desde JavaScript desde cero

let enviar = document.createElement("button");
enviar.setAttribute("type" , "submit");
span.append(enviar);





