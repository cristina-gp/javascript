const imp_cons=document.getElementById("consola");
const cuerpo=document.getElementById("cuerpo");
const titulo=document.getElementById("title");
const boton=document.getElementById("boton");
const alinear=document.getElementById("alinearcentro");
const bordes=document.getElementById("bordes");
const invisible=document.getElementById("invisible");
const ocultar=document.getElementById("ocultar");
const desaparece=document.getElementById("desaparece");
const perro=document.getElementById("perro");
const foto=document.getElementById("foto");
const disney=document.getElementById("disney");
const nombre=document.getElementById("nombre");
const rellenar=document.getElementById("rellenar");
const apagado=document.getElementById("apagado");



imp_cons.addEventListener("click", ()=>{
const imagen=document.createElement("img");
titulo.textContent="Hola Mundo";
titulo.style.fontSize="360px";
imagen.src="https://media.istockphoto.com/id/636379014/es/foto/manos-la-formaci%C3%B3n-de-una-forma-de-coraz%C3%B3n-con-silueta-al-atardecer.jpg?s=612x612&w=0&k=20&c=R2BE-RgICBnTUjmxB8K9U0wTkNoCKZRi-Jjge8o_OgE=";
imagen.style.width="300px";
cuerpo.appendChild(imagen);
});
boton.addEventListener("click",() =>{
    document.body.style.backgroundColor="red"; 
});

boton.addEventListener("click",() =>{
   const parrafo=document.createElement("p");
   parrafo.textContent="Me he clonado!";
   cuerpo.appendChild(parrafo);
});

alinear.addEventListener("click", ()=>{
    alinear.style.textAlign="center";
});
bordes.addEventListener("click", ()=>{
    bordes.style.borderRadius ="20px";
});
ocultar.addEventListener("click", ()=>{
    invisible.style.color="white";
});
desaparece.addEventListener("click",() =>{
    desaparece.style.display="none";
    });

perro.addEventListener("click",() =>{
    foto.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTul2RdESWQAkfUNuVBLOJnn_7jHdEYmQ_ZzN5GDecKwA&s=10";
    foto.style.width="250px";
   });
disney.addEventListener("click",() =>{
  disney.href="https://es.wikipedia.org/wiki/Wikipedia:Portada";  
    });

rellenar.addEventListener("click",() =>{
    nombre.value="Hola, soy un robot";
});

apagado.addEventListener("click",() =>{
    apagado.disabled=true;
});
