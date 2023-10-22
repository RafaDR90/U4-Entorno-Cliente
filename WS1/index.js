window.onload=()=>{
    //ej1.
    const btnAlert=document.getElementById("btnAlert");
    btnAlert.addEventListener("click",()=>alert("!!!!!"));

    //ej2.
    //document.body.addEventListener("mousemove",(e)=>{console.log(e.clientX+" ; "+e.clientY)})

    //ej4.
    creaPizarra();
    const pixeles=document.querySelectorAll("td");
    pixeles.addEventListener()//SEGUIR POR AQUI
};

function creaPizarra(){
    document.write("<table border='solid' black>");
    for(let i=0;i<100;i++){
        document.write("<tr>")
        for(let j=0;j<100;j++){
            document.write("<td></td>")
        }
        document.write("</tr>")
    }
    document.write("</table>");
}

