window.onload=()=>{
    const normal=document.getElementById("normal");
    const basico=document.getElementById("basico");
    const body=document.querySelector("body");
    const links=document.getElementById("links");
    const link=document.querySelectorAll("a");
    const main=document.querySelector("main");
    const oculto=document.getElementById("oculto");

    normal.addEventListener("click",(e)=>{
        body.classList.add("body");
        links.classList.add("links");
        link.forEach(element => {
            element.classList.add("link");
        });
        main.classList.add("main");
        oculto.classList.remove("oculto");
        e.preventDefault();
    })

    basico.addEventListener("click",(e)=>{
        body.classList.remove("body");
        links.classList.remove("links");
        link.forEach(element => {
            element.classList.remove("link");
        });
        main.classList.remove("main");
        oculto.classList.add("oculto");
        e.preventDefault();
    })
}
