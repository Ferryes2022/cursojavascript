let dato1 = document.querySelector(".dato1");
let dato2 = document.querySelector(".dato2");
let calculo = document.querySelector(".resultado");
let tuResultado = document.querySelector(".tuResultado")
// Se debe crear una funcion que esta relacionada con la etiqueta boton, esta función resCalcular esta en el atributo onclick de esta manera queda relacionada
// Cuando se oprime el boton este evento llama la función Rescalcular y se ejecuta lo que este dentro de la función
function ResCalcular()
{
    let respuesta = dato1.value * dato2.value;
    tuResultado.innerText = "Este es el resultado " + respuesta
}

// Se debe crear una variable que guarda la operación en este caso es respuesta; para imprimir en el HTML el resultado
// se acude a la variable que guarda el selector de la etiqueta parrafo con el atribite innerText y a este se le asigna la variable
// que de la función

