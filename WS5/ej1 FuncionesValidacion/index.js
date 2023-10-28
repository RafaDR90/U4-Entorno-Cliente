/**
 * Valida si tiene al menos una mayuscula
 * @param {*} parametro
 * @return {*} 
 */
function validarMayuscula(parametro) {
    return /[A-Z]/.test(parametro);
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

  
  