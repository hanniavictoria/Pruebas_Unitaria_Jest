//FUNCIONES

//Ejercicio 1: Calculadora de descuento 

function calcularDescuento (precio, porcentaje){


        if (porcentaje < 0 || porcentaje > 100) {
        return "porcentaje invalido";
    }

    const descuento = precio * (porcentaje / 100); 
    return precio - descuento;

}

//Ejercicio 2: Validación de contraseña

function validarPassword (password){

    const regex = /\d/;
    
    if (password.length < 8 || !regex.test(password)){
        return false;
    }
    return true;
}

//Ejercicio 3: Conversor de temperatura.

function celsiusAFahrenheit (celsius){
    return ((celsius * (9/5))+32)
}

//Ejercicio 4: Verificador de mayoria de edad. 

function esMayorDeEdad (edad){
    if(edad < 18 ){
        return false;
    }
    return true;
}

//Ejercicio 5: Generador de nombre completo 

function generarNombreCompleto (nombre, apellido){
    return nombre + " " + apellido
}

module.exports = {
    calcularDescuento,
    validarPassword,
    celsiusAFahrenheit,
    esMayorDeEdad,
    generarNombreCompleto
};