window.onload=()=>{

    const username=document.getElementById("username");
    const lista=document.querySelectorAll("li");
    const submit=document.getElementById("submit");

    
    username.addEventListener("input",(e)=>{
        lista[0].style.visibility= (!validarMinuscula(e.target.value))? "visible" : "hidden";
        lista[1].style.visibility=(!validarMayuscula(e.target.value))? "visible" : "hidden";
        lista[2].style.visibility=(!validarLongitud(e.target.value))? "visible" : "hidden";
    })

    submit.addEventListener("click",(e)=>{
        let errores=0;
        errores+=(!validarMinuscula(username.value))? 1 : 0;
        errores+=(!validarMayuscula(username.value))? 1 : 0;
        errores+=(!validarLongitud(username.value))? 1: 0;
        if(errores!==0){
            e.preventDefault();
            e.target.style.backgroundColor="red"
        }
    })
}