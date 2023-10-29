/**
 * Valida si tiene al menos una mayuscula
 * @param {*} parametro
 * @return {*} 
 */
function validarMayuscula(parametro) {
    return /[A-Z]/.test(parametro);
  }

/**
 * Valida si tiene al menos una minuscula
 * @param {*} parametro
 * @return {*} 
 */
function validarMinuscula(parametro) {
    return /[a-z]/.test(parametro);
  }

/**
 * Valida si tiene al menos uno de los siguientes caracteres [!@#$%^&]
 * @param {*} parametro
 * @return {*} 
 */
function validarCaracteresEspeciales(parametro) {
    return /[!@#$%^&]/.test(parametro);
}
  
/**
 * Valida correo
 * @param {*} parametro
 * @return {*} 
 */
function validarCorreo(parametro) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(parametro);
}

/**
 * comprueba que tiene todos los numeros y separados por guiones (-)
 * @param {*} parametro
 * @return {*} 
 */
function validarTarjetaCredito(parametro) {
    return /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(parametro);
}

/**
 * Comprueba que tiene 8 o mas caracteres
 * @param {*} parametro
 * @return {*} 
 */
function validarLongitud(parametro) {
    return parametro.length >= 8;
}


/**
 * Comrueba que contiene al menos un numero
 * @param {*} parametro
 * @return {*} 
 */
function validarNumero(parametro) {
    return /\d/.test(parametro);
}

function validarNoEstaVacioNiTieneMasDe50Caracteres(texto) {
    if (texto.trim() === '') {
      return false;
    }
    if (texto.length > 50) {
      return false;
    }
    return true;
  }
  
  function validarNumeroDeTelefono(telefono) {
    // Saneamiento: eliminar caracteres no numéricos
    telefono = telefono.replace(/\D/g, '');
  
    if (telefono.length === 9) {
      return true;
    }
  
    return false; 
  }
  function validateConfirmPassword(pw,confirmPW){
    if (pw===confirmPW){
        return true;
    }
    return false;
  }
  
  function validateEmail(email) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  
    // Comprobar si el correo electrónico cumple con el formato válido
    return regex.test(email);
  }