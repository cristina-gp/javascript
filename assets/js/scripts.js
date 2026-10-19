// Busca en el HTML el elemento con id="consola" (el botón "Imprimir en consola")
// y lo guarda en la constante imp_cons para poder usarlo desde JavaScript.
// El id va entre comillas porque es un texto (string), no una variable.
const imp_cons=document.getElementById("consola")

// Añade un "escuchador de eventos" al botón: cada vez que el usuario haga
// clic ("click"), se ejecutará la función flecha que se pasa como segundo argumento.
imp_cons.addEventListener("click", ()=>{
    // Muestra el mensaje en la consola del navegador (F12 > pestaña Consola).
    console.log("esto es un evento")
})

// Busca el elemento con id="cuerpo" (la etiqueta <body> del HTML)
// y lo guarda en la constante cuerpo. De momento no se usa, pero
// servirá para modificar el contenido o el estilo de la página más adelante.
const cuerpo=document.getElementById("cuerpo")

