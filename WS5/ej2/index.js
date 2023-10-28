
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
var validado={};

submitButton.addEventListener("click",(e)=>{
    if(!aceptado){
        e.preventDefault();
        span.innerText="Debes completar todos los campos requeridos";
    }
});

nombre.addEventListener("focusout",(e)=>{
    if(validarLongitud(e.target.value)){
        validado["nombre"]=true
        
    }else{
        nombre.style.borderColor="red";
        validado["nombre"]=false;
    }
});

nombreUsuario.addEventListener("focusout",(e)=>{
    if(validarLongitud(e.target.value) && validarCaracteresEspeciales(e.target.value)){
        validado["nombre"]=true
        
    }else{
        nombre.style.borderColor="red";
        validado["nombre"]=false;
    }
})

}