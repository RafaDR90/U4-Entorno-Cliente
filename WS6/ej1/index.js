window.onload=()=>{
    const h1=document.querySelector("h1");
    const cerrarSesion=document.querySelector("a");

    if(document.cookie.includes("nombre")){
        let nombre=leerCookie("nombre");
        h1.innerText=`Bienvenido ${nombre}`;
        cerrarSesion.innerText="Cerrar Sesion";
    }else{
        let nombre=prompt("Cual es tu nombre?");
        h1.innerText=`Bienvenido ${nombre}`;
        crearCookie("nombre",nombre,5);
        cerrarSesion.innerText="Cerrar Sesion";
    }

    cerrarSesion.addEventListener("click",(e)=>{
        let cookie=leerCookie("nombre")
        if (cookie!="") {
            borrarCookie("nombre");
        }
    })
}