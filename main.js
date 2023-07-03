//Ejercicio 1 -- Crea una función llamada "saludar" que tome un parámetro de tipo cadena/string que
//represente un nombre, y muestre en la consola un saludo personalizado utilizando el
//nombre proporcionado. Llama a la función con tu propio nombre para verificar que
//funcione correctamente.
function saludar (nombre) {
    console.log("Hola " + nombre + " .Bienvenido!!!")
}
    saludar("Ivan")

//Ejercicio 2 -- Crea una función llamada "multiplicar" que reciba dos parámetros numéricos y
//devuelva el resultado de la multiplicación de ambos. Llama a la función con dos valores 2 diferentes
//y muestra el resultado en la consola.
function multiplicar (num1, num2 ) {
    return num1 * num2;
}
let resultado = multiplicar (20, 10)
    console.log("El resultado de la multiplicacion: " + resultado)
  

// Ejercicio 3 -- Crea una función llamada "areaTriangulo" que reciba dos parámetros numéricos que
//representen la base y la altura de un triángulo, y devuelva el área del mismo. Luego,
//crea otra función llamada "perimetroTriangulo" que reciba tres parámetros numéricos
//que representen los lados de un triángulo, y devuelva el perímetro del mismo. Utiliza
//estas funciones para calcular el área y el perímetro de un triángulo con base 5 y altura
//3 y lados de 4, 5 y 6 respectivamente.
function areaTriangulo (base, altura) {
    return base * altura / 2
}
function perimetroTriangulo (ladoA, ladoB, ladoC) {
    return ladoA+ ladoB+ ladoC
}   

let resultadoArea = areaTriangulo (5,3)
    console.log("El area del triangulo es: " + resultadoArea)

let resultadoPerimetro = perimetroTriangulo (4,5,6)
    console.log("El resultado del perimetro es: " + resultadoPerimetro)

//Ejercicio 4 -- Crea una función llamada "calcularPrecio" que reciba dos parámetros numéricos que
//representen el precio y la cantidad de un producto, y devuelva el precio total de la
//compra. Si la cantidad de productos es mayor o igual a 10, aplica un descuento del
//10% al precio total. Si la cantidad de productos es mayor o igual a 20, aplica un
//descuento del 20% al precio total. Llama a la función con diferentes valores de precio y
//cantidad para verificar que funcione correctamente

function calcularPrecio(precio, cantidadProducto) {
    let precioTotal = precio * cantidadProducto;
    
    if (cantidadProducto >= 10 && cantidadProducto < 20) {
        precioTotal -= precioTotal * 0.1;
    } else if (cantidadProducto >= 20) {
        precioTotal -= precioTotal * 0.2;
    }
    
    return precioTotal;
}

let precio = 100
let cantidadProducto = 22
let Resultado = calcularPrecio(precio, cantidadProducto)
console.log(`El precio total de la compra es: ${Resultado}`);

let precio1 = 10
let cantidadProducto1 = 12
let Resultado1 = calcularPrecio(precio1, cantidadProducto1)
console.log(`El precio total de la compra es: ${Resultado1}`);

let precio2 = 50
let cantidadProducto2 = 21
let Resultado3 = calcularPrecio(precio2, cantidadProducto2)
console.log(`El precio total de la compra es: ${Resultado3}`);

//Ejercicio 5 -- Crea una función llamada "esMayorDeEdad" que reciba un parárametro numérico que
//represente la edad de una persona, y devuelva un mensaque que indique si la persona 
//es mayor de edad o no. Si la edad es mayor igual a 18, el mensaje debe decir "eres
//mayor de edad". Si la edad es menor a 18, el mensaje debe decir "Eres menor de edad".
//Utiliza el operador ternario para implementar esta función. Llama a la función con 
//diferentes valores de edad para verificar que funcione correctamente.

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}

esMayorDeEdad(22);
esMayorDeEdad(15);


//Ejercicio 6 -- Crea una funcion llamada "calcularImpuestos" que tome un parámetro numérico que
//represente el ingreso anual de una persona, y devuelva el impuesto que debe pagar. Si el ingreso es
//menor o igual a $10.000, el impuesto es del 10% de ingreso. Si el ingreso es mayor a $10.000 pero
//menor o igual a $20.000, el impuesto es del 15% del ingreso. Si el ingreso es mayor a $20.000, 
//el impuesto es de 20% del ingreso. Utiliza condicionales anidadas para implementar esta función. 
//Llama a la función con diferentes valores de ingreso para verificar que funcione correctamente.

function calcularImpuestos(ingresoAnual) {
    let impuesto;

    if (ingresoAnual <= 10000) {
        impuesto = ingresoAnual * 0.1;
    } else if (ingresoAnual <= 20000) {
        impuesto = ingresoAnual * 0.15;
    } else {
        impuesto = ingresoAnual * 0.2;
    }

    return impuesto;
}

let ingreso1 = 5000;
let impuesto1 = calcularImpuestos(ingreso1);
console.log("El impuesto a pagar es: " + impuesto1);

let ingreso2 = 18000;
let impuesto2 = calcularImpuestos(ingreso2);
console.log("El impuesto a pagar es: " + impuesto2);

let ingreso3 = 35000;
let impuesto3 = calcularImpuestos(ingreso3);
console.log("El impuesto a pagar es: " + impuesto3);

//Ejercicio 7 -- Crea una funcion llamada "verificarDia" que reciba un parámetro numérico que represente 
//el número del día de la semana, y devuelva un mensaje que indique si es un día laboral o no. Si el 
//número es 1,2,3,4,5, el mensaje debe decir "Es un día laboral". Si el número es 6 o 7, el mensaje debe 
//decir "Es fin de semana". Utiliza la estructura de control switch anidada para implementar esta función.
//Llama a la funcion con diferentes valores de dia para verificar que funcione correctamente.

function verificarDia(numeroDia) {
    switch (numeroDia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("Es un día laboral");
            break;
        case 6:
        case 7:
            console.log("Es fin de semana");
            break;
        default:
            console.log("Número de día inválido");
            break;
    }
}

verificarDia(1);
verificarDia(4);
verificarDia(7);
verificarDia(10);