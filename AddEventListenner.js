let form = document.querySelector("#form");
let dato1 = document.querySelector(".dato1");
let dato2 = document.querySelector(".dato2");
let calculo = document.querySelector(".resultado");
let tuResultado = document.querySelector(".tuResultado")

// addEventListener debe tener dos argumentos, el primero es el evento que vamos a escuchar y el segundo es la función que va ejecutar
// form.addEventListener("submit", Operacion)

// function Operacion (event)
{
    // event.preventDefault aplica para que no ejecute la recarga de la pagina que por defecto hace el submit ya que
    // estamosusando un form que por defecto hace que el ultimo boton sea un submit y este por defecto recarga la pagina
    // Para ello debemos poner event en los parametros de la función y luego poner event.preventDefault
    // event.preventDefault();
    // let Elresultado = dato1.value * dato2.value;
    // tuResultado.innerText = "Este es el resultado " + Elresultado;
    
}

// La segunda manera de evitar que se recargue la pagina cuando se haga click en el boton es dandole al boton
// el type button en el HTML de manera que ya no sea un submit que por defecto esta al estar dentro de un form

calculo.addEventListener("click", Operacion)

function Operacion()

   {
    let Elresultado = dato1.value * dato2.value;
    tuResultado.innerText = "Este es el resultado " + Elresultado;

   }
