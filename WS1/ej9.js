window.onload=()=>{


const contenedor=document.getElementById("contenedor");
    const imagen=document.getElementById("icono");
    var cordY;
    var cordX;
    var cordXresta=0
    var cordYResta=0

    pulsado=false;

    contenedor.addEventListener("click",(e)=>{
            pulsado=!pulsado
            posicionImg=imagen.getBoundingClientRect();
            cordXresta=e.clientX-posicionImg.left;
            cordYResta=e.clientY-posicionImg.top;
    })

    contenedor.addEventListener("mousemove",(e)=>{
        
        cordX=e.clientX;
        cordY=e.clientY;
        if(pulsado){
            imagen.style.top=cordY-cordYResta+"px";
            imagen.style.left=cordX-cordXresta+"px";
        }
    });

    
}