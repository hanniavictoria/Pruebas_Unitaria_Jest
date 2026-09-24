# Pruebas Unitarias con Jest

## Descripción

Este proyecto tiene como objetivo practicar la creación de pruebas unitarias utilizando Jest en funciones básicas de JavaScript.

Se desarrollaron cinco funciones y diferentes casos de prueba para comprobar su comportamiento en situaciones válidas, inválidas y valores límite.

## Tecnologías utilizadas

- JavaScript
- Node.js
- Jest

## Estructura del proyecto

```text
pruebasUnitarias/
├── js/
│   ├── funciones.js
│   └── funciones.test.js
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

## Funciones desarrolladas

### 1. calcularDescuento(precio, porcentaje)

Calcula el precio final de un producto después de aplicar un porcentaje de descuento.

Si el porcentaje es menor que 0 o mayor que 100, devuelve `"porcentaje invalido"`.

Casos de prueba utilizados:

| Precio | Porcentaje | Resultado esperado |
|---:|---:|---|
| 1000 | 20% | 800 |
| 1000 | 0% | 1000 |
| 1000 | 100% | 0 |
| 1000 | 200% | `"porcentaje invalido"` |
| 1000 | -10% | `"porcentaje invalido"` |

### 2. validarPassword(password)

Valida que una contraseña cumpla con las siguientes condiciones:

- Tener mínimo 8 caracteres.
- Contener al menos un número.

La función devuelve `true` cuando la contraseña cumple las condiciones y `false` cuando no las cumple.

Casos de prueba utilizados:

| Contraseña | Caso | Resultado esperado |
|---|---|---|
| `"milanesa123"` | Contraseña válida | `true` |
| `"milanesa"` | No contiene números | `false` |
| `"milanes"` | Tiene menos de 8 caracteres | `false` |

Para estas pruebas se utilizaron los matchers `toBeTruthy()` y `toBeFalsy()`.

### 3. celsiusAFahrenheit(celsius)

Convierte una temperatura de grados Celsius a grados Fahrenheit utilizando la fórmula:

```text
°F = (°C × 9/5) + 32
```

Casos de prueba utilizados:

| Celsius | Fahrenheit esperado |
|---:|---:|
| 30°C | 86°F |
| -50°C | -58°F |
| 0°C | 32°F |

### 4. esMayorDeEdad(edad)

Comprueba si una persona es mayor de edad.

La función devuelve `true` cuando la edad es igual o mayor a 18 y `false` cuando es menor de 18.

Casos de prueba utilizados:

| Edad | Resultado esperado |
|---:|---|
| 25 | `true` |
| 18 | `true` |
| 12 | `false` |

Los casos incluyen el valor límite de 18 años para comprobar que también sea considerado como mayoría de edad.

### 5. generarNombreCompleto(nombre, apellido)

Genera un nombre completo concatenando el nombre y el apellido con un espacio entre ambos.

Casos de prueba utilizados:

| Nombre | Apellido | Resultado esperado |
|---|---|---|
| Hannia | Victoria | `"Hannia Victoria"` |
| Juan | Manuel | `"Juan Manuel"` |

## Pruebas unitarias

Las pruebas se encuentran en:

```text
js/funciones.test.js
```

Para ejecutar todas las pruebas se utiliza:

```bash
npm test
```

Al finalizar el desarrollo se ejecutaron un total de 16 pruebas correspondientes a las cinco funciones.

```text
Test Suites: 1 passed
Tests:       16 passed
```

## Matchers utilizados

Durante las pruebas se utilizaron diferentes matchers de Jest:

- `toBe()` para comparar valores exactos.
- `toBeTruthy()` para comprobar resultados verdaderos.
- `toBeFalsy()` para comprobar resultados falsos.

## Problemas encontrados durante el desarrollo

Durante el desarrollo se presentaron algunos errores que ayudaron a comprender mejor el funcionamiento de las pruebas unitarias.

Uno de los primeros problemas fue la importación de las funciones en el archivo de pruebas. Esto provocó que Jest indicara que `calcularDescuento` no era una función. El problema se solucionó verificando la exportación e importación de las funciones y guardando correctamente los archivos antes de ejecutar las pruebas.

También se encontró un error en una prueba de conversión de temperatura. La prueba esperaba el resultado correspondiente a `-50°C`, pero se había enviado inicialmente un valor positivo. Jest permitió identificar que el resultado obtenido no coincidía con el esperado.

Otro error ocurrió durante las pruebas de generación de nombres, ya que inicialmente se estaba llamando a la función de conversión de temperatura en lugar de `generarNombreCompleto()`. Esto produjo un resultado `NaN`. Al utilizar la función correcta, las pruebas pasaron correctamente.

Estos errores permitieron comprobar la utilidad de las pruebas unitarias para detectar problemas tanto en el código como en los propios casos de prueba.

## Resultado final

El proyecto cuenta con:

- 5 funciones implementadas.
- 16 pruebas unitarias.
- Casos válidos, inválidos y valores límite.
- Todas las pruebas ejecutándose correctamente con Jest.
- Documentación técnica del proyecto.

## Conclusión

Este ejercicio permitió comprender el funcionamiento básico de las pruebas unitarias con Jest, incluyendo la creación de casos de prueba, el uso de diferentes matchers y la comparación entre resultados obtenidos y resultados esperados.