window.onload=()=>{
    //ej1.
    const btnAlert=document.getElementById("btnAlert");
    btnAlert.addEventListener("click",()=>alert("!!!!!"));

    //ej2.
    //document.body.addEventListener("mousemove",(e)=>{console.log(e.clientX+" ; "+e.clientY)})
    //ej3.
    window.onload = function() {
        var tiempoDeCarga = performance.now();
        var bodyElement = document.querySelector('body');

        function actualizarTiempoTranscurrido() {
            var tiempoActual = performance.now();
            var tiempoTranscurrido = tiempoActual - tiempoDeCarga;
            bodyElement.innerHTML = "<h1>Tiempo transcurrido desde la carga de la página:</h1><p>" + tiempoTranscurrido.toFixed(2) + " ms</p>";
        }
        setInterval(actualizarTiempoTranscurrido, 100);
    };
    //ej4.
    const pixeles=document.querySelectorAll("td");
    

    pixeles.forEach(pixel => {
    pixel.addEventListener("mouseover", (event) => {
        if (event.ctrlKey) {
            pixel.style.backgroundColor = "blue";   
        }else if(event.shiftKey){
            pixel.style.backgroundColor ="red"
        }
        });
    });

    pixeles.forEach(pixel =>{
        pixel.addEventListener("mouseover",(event)=>{
            if(event.altKey){
                pixel.style.backgroundColor="white";
            } 
        });
    });
    
    const borrar=document.getElementById("borrar")
    borrar.addEventListener("click",()=>{
        pixeles.forEach(px => {
            px.style.backgroundColor="white"
        });
    })

    //9
    const contenedor=document.getElementById("contenedor");
    const imagen=document.getElementById("icono");
    var cordY;
    var cordX;


    pulsado=false;

    contenedor.addEventListener("click",(e)=>{
            pulsado=!pulsado
            cordXresta=e.clientX;
            cordYResta=e.clientY
    })

    contenedor.addEventListener("mousemove",(e)=>{
        cordX=e.clientX;
        cordY=e.clientY;
        if(pulsado){
            imagen.style.top=cordY-cordYResta+"px";
            imagen.style.left=cordX-cordXresta+"px";
        }
    });





    //10
}