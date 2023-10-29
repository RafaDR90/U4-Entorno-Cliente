window.onload=()=>{

    const firstName=document.getElementById("firstName");
    const phone=document.getElementById("phone");
    const pw=document.getElementById("password");
    const confirmPw=document.getElementById("confirmPassword");
    const lastName=document.getElementById("lastName");
    const email=document.getElementById("email");
    const singUp=document.getElementById("submit")
    const agree=document.getElementById("agree2");
    const span=document.querySelector("span");

    singUp.addEventListener("click",(e)=>{
        let errores=0;
        errores+= (!validarCaracteresEspeciales(firstName.value) && validarNoEstaVacioNiTieneMasDe50Caracteres(firstName.value))? 0 : 1;
        errores+=(validarNumeroDeTelefono(phone.value))? 0:1;
        errores+=(validarCaracteresEspeciales(pw.value) && validarNoEstaVacioNiTieneMasDe50Caracteres(pw.value))? 0:1;
        errores+=(validateConfirmPassword(pw.value,confirmPw.value))?0:1;
        errores+= (!validarCaracteresEspeciales(lastName.value) && validarNoEstaVacioNiTieneMasDe50Caracteres(lastName.value))? 0 : 1;
        errores+=(validateEmail(email.value))?0:1;
        if(errores!=0 || !(agree.checked)){
            e.preventDefault();
            singUp.style.borderColor="red";
            span.style.visibility="visible";
        }
    })

    firstName.addEventListener("input",(e)=>{
        (!validarCaracteresEspeciales(e.target.value) && validarNoEstaVacioNiTieneMasDe50Caracteres(e.target.value))? e.target.style.borderColor="initial" : e.target.style.borderColor="red"
    })

    phone.addEventListener("input",(e)=>{
        (validarNumeroDeTelefono(phone.value))?e.target.style.borderColor="initial" : e.target.style.borderColor="red"
    })

    pw.addEventListener("input",(e)=>{
        (validarCaracteresEspeciales(pw.value) && validarNoEstaVacioNiTieneMasDe50Caracteres)?e.target.style.borderColor="initial" : e.target.style.borderColor="red"
    })

    confirmPw.addEventListener("input",(e)=>{
        (validateConfirmPassword(pw.value,confirmPw.value))?e.target.style.borderColor="initial" : e.target.style.borderColor="red"
    })

    lastName.addEventListener("input",(e)=>{
        (!validarCaracteresEspeciales(lastName.value) && validarNoEstaVacioNiTieneMasDe50Caracteres(lastName.value))?e.target.style.borderColor="initial" : e.target.style.borderColor="red"
    })

    email.addEventListener("input",(e)=>{
        (validateEmail(email.value))?e.target.style.borderColor="initial" : e.target.style.borderColor="red"
    })
}