window.onload=()=>{
    //ej1.
    const btnAlert=document.getElementById("btnAlert");
    btnAlert.addEventListener("click",()=>alert("!!!!!"));

    //ej2.
    //document.body.addEventListener("mousemove",(e)=>{console.log(e.clientX+" ; "+e.clientY)})

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
}