//Estructura:
//test("descripción de lo que quiero comprobar", () => {
    // ejecutamos algo
    // comprobamos el resultado
//});

//Para comprobar un resultado usamos:

//expect(ALGO).toBe(RESULTADO_ESPERADO);

const { 
    calcularDescuento,
    validarPassword,
    celsiusAFahrenheit,
    esMayorDeEdad,
    generarNombreCompleto 
} = require('./funciones');

//FUNCION 1: Calculadora

test("Se aplica correctamente el descuento", () => {

    const resultado = calcularDescuento(1000,20);
    expect(resultado).toBe(800);
});

test("El descuento es 0", () => {

    const resultado = calcularDescuento(1000,0);
    expect(resultado).toBe(1000);
});

test("El descuento es 100%", () => {

    const resultado = calcularDescuento(1000,100);
    expect(resultado).toBe(0);
});

test("Descuento invalido", () => {

    const resultado = calcularDescuento(1000,200);
    expect(resultado).toBe("porcentaje invalido");
});

test("Descuento menor del 0%", () => {

    const resultado = calcularDescuento(1000,-10);
    expect(resultado).toBe("porcentaje invalido");
});

//FUNCION 2: Contraseña. 

test("Contraeña Valida", () => {

    const resultado = validarPassword("milanesa123");
    expect(resultado).toBeTruthy();
});

test("Contraseña sin números", () => {

    const resultado = validarPassword("milanesa");
    expect(resultado).toBeFalsy();
});

test("Contraseña corta", () => {

    const resultado = validarPassword("milanes");
    expect(resultado).toBeFalsy();
});

//FUNCION 3: Temperatura 

test("La conversión de 30°C son 86°F", () => {

    const resultado = celsiusAFahrenheit(30);
    expect(resultado).toBe(86);
});

test("La conversión de -50°C son -58°F", () => {

    const resultado = celsiusAFahrenheit(-50);
    expect(resultado).toBe(-58);
});

test("La conversión de 0°C son 32°F", () => {

    const resultado = celsiusAFahrenheit(0);
    expect(resultado).toBe(32);
});

//FUNCION 4: Mayor de edad

test("Juan tiene 25 años y es mayor de edad", () => {

    const resultado = esMayorDeEdad(25);
    expect(resultado).toBeTruthy();
});

test("Maria tiene 18 años y es mayor de edad", () => {

    const resultado = esMayorDeEdad(18);
    expect(resultado).toBeTruthy();
});

test("Toño tiene 12 años y es menor de edad", () => {

    const resultado = esMayorDeEdad(12);
    expect(resultado).toBeFalsy();
});

//FUNCION 5: Nombre

test("El nombre es Hannia Victoria", () => {

    const resultado = generarNombreCompleto("Hannia", "Victoria");
    expect(resultado).toBe("Hannia Victoria");
});

test("El nombre es Juan Manuel", () => {

    const resultado = generarNombreCompleto("Juan", "Manuel");
    expect(resultado).toBe("Juan Manuel");
});