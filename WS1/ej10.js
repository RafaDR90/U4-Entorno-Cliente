window.onload=()=>{


    /* const contenedor=document.getElementById("contenedor");
        const imagenes=document.querySelectorAll("img");
        var cordY;
        var cordX;
        var cordXresta=0
        var cordYResta=0
    
        pulsado=false;
        var imagen;

        imagenes.foreach(element=>{
            element.addEventListener("click",(e)=>{
                pulsado=!pulsado
                imagen=element;
                let posicionImg=imagen.getBoundingClientRect();
                cordXresta=e.clientX-posicionImg.left;
                cordYResta=e.clientY-posicionImg.top;

            })
        });
        
        
        
            document.addEventListener("mousemove",(e)=>{
            
                cordX=e.clientX;
                cordY=e.clientY;
                if(pulsado){
                    imagen.style.top=cordY-cordYResta+"px";
                    imagen.style.left=cordX-cordXresta+"px";
                }
            }); */

    const contenedor=document.getElementById("contenedor");
    const imagen=document.querySelectorAll("img");
    var cordY;
    var cordX;
    var cordXresta=0
    var cordYResta=0
    pulsado=false;
    var img;

    imagen.forEach(element => {
        element.addEventListener("click",(e)=>{
            pulsado=!pulsado
            img=element;
            posicionImg=img.getBoundingClientRect();
            cordXresta=e.clientX-posicionImg.left;
            cordYResta=e.clientY-posicionImg.top;
    })
    });
    
    

    document.addEventListener("mousemove",(e)=>{
        cordX=e.clientX;
        cordY=e.clientY;
        if(pulsado){
            img.style.top=cordY-cordYResta+"px";
            img.style.left=cordX-cordXresta+"px";
        }
    });

}
        
    
        
    