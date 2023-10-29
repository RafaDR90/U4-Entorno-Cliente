
window.onload=()=>{
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const dni = document.getElementById("dni");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const nombreUsuario = document.getElementById("nombreUsuario");
const submitButton = document.getElementById("submit");
const span=document.querySelector("span");


submitButton.addEventListener("click",(e)=>{
    let errores=0;
    if(!validarLongitud(nombre.value)){
        errores+=1;
        nombre.style.borderColor="red";
    }
    if(!validarLongitud(nombreUsuario.value) && !validarCaracteresEspeciales(nombreUsuario.value)){
        errores+=1;
        nombreUsuario.style.borderColor="red";
    }

    if(errores!=0){
        e.preventDefault();
        span.innerText="Debes completar todos los campos requeridos";
    }
        
});

nombre.addEventListener("focusout",(e)=>{
    (!validarLongitud(e.target.value)) ? e.target.style.borderColor="red" : e.target.style.borderColor="initial";
});

nombreUsuario.addEventListener("focusout",(e)=>{
    (validarLongitud(e.target.value) && validarCaracteresEspeciales(e.target.value)) ? e.target.style.borderColor="initial": e.target.style.borderColor="red";      
})

}