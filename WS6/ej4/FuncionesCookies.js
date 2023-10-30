function crearCookie(identificador, valor, minutosExpiracion = null) {
    if (minutosExpiracion == null) {
        document.cookie = identificador + "=" + valor;
    } else {
        const fechaExpiracion = new Date();
        fechaExpiracion.setTime(fechaExpiracion.getTime() + (minutosExpiracion * 60 * 1000));
        document.cookie = identificador + "=" + valor + "; expires=" + fechaExpiracion.toUTCString();
    }
}


function leerCookie(identificador){
    if(document.cookie.includes(identificador)){
        let cookies=document.cookie.split(";");
        for(let i=0;i<cookies.length;i++){
            if(cookies[i].includes(identificador)){
                let cookie=cookies[i].split("=");
                return cookie[1].trim();
            }
        }
    }
    return "";
}

function borrarCookie(identificador) {
    const fechaExpiracion = new Date(0); // Establecer la fecha en el pasado (1 de enero de 1970)
    document.cookie = `${identificador}=; expires=${fechaExpiracion.toUTCString()}; path=/;`;
}

