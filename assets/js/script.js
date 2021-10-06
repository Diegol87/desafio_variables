//EJERCICIO 2

//Acá se ingresarán las dos números los cuales deben ser mnayores a cero y distintos entre sí
let num1 = parseInt(prompt("EJERICIO 2, Ingrese su primer número mayor a cero: "))
let num2 = parseInt(prompt("EJERCICIO 2, Ingrese su segundo número mayor a cero y distinto al primer numero ingresado: "))

//Aquí aplicamos las distintas operaciones matemátocas
let resultadoSuma = num1 + num2;
let resultadoResta = num1 - num2;
let resultadoDivision = num1 / num2;
let resultadoMultiplicacion = num1 * num2;
let resultadoModulo = num1 % num2;

//Acá aplicamos un if para validar los requisitos de ambos números mayores a cero y distintos entre sí
if(num1 > 0 && num2 > 0 && num1 != num2){

//Generramos un mensaje en la página y en consola de acuerdo a las restricciones antes mencioandas    
alert("Ingreso numeros validos")    
console.log("Ingreso numeros validos")
console.log("EJERCICIO 2")

//Acá ordenamos los resultados por cada operación
console.log(`
    Suma: ${resultadoSuma}
    Resta: ${resultadoResta}
    División: ${resultadoDivision}
    Multiplicación: ${resultadoMultiplicacion}
    Módulo: ${resultadoModulo}

`)}else {
    alert("Datos errados, recuerda ingresar numero distintos y mayores a cero")
    console.log("Datos errados, recuerda ingresar numero distintos y mayores a cero")
}

//EJERCICIO 3

//Ingresamos el valor de grados celsuis e incorporamos una constante para los grados kelvin
let grade = parseInt(prompt("EJERCICIO 3, Ingrese la temperatura en grados Celsuis: "))
const kel = parseInt(273.15)

//Acá incorporamos los cálculos para convertir el valor del grado celsuis ingresado a pasarlos a escala kelvin y fahrenheit
let kelvin = grade + kel;
let fahrenheit = (grade * (9/5)) + 32

//Acá visibilizamos el resultado mostrando la conversión de celcius a kelvin y fahreinheit
console.log("EJERCICIO 3")
console.log(`
    Kelvin: ${kelvin}
    Fahrenheit: ${fahrenheit}
`)

//EJERCICIO 4

//Acá ingresamos la cantidad de días ya greamos las constantes del año y de la semana
let days = parseInt(prompt("EJERCICIO 4, Ingrese una cantidad de días: "))
const age = parseInt(365)
const week = parseInt(7)

//Acá calculamos y pasamos lo valores del día a año y semana
let año = Math.floor(days / age);
let semana = Math.floor((days % age) % week);

//Aquí mostramos en la consola la conversión de días a año y semana
console.log("EJERCICIO 4")
console.log(`
    Año: ${año}
    Semana: ${semana}
`)

//EJERCICIO 5

//Acá se ingresan los cinco números solciitados
let numero1 = parseInt(prompt("EJERCICIO 5, Ingrese su primer número: "))
let numero2 = parseInt(prompt("EJERCICIO 5, Ingrese su segundo número: "))
let numero3 = parseInt(prompt("EJERCICIO 5, Ingrese su tercer número: "))
let numero4 = parseInt(prompt("EJERCICIO 5, Ingrese su cuarto número: "))
let numero5 = parseInt(prompt("EJERCICIO 5, Ingrese su quinto número: "))

//Acá se realiza la operación de suma y promedio
let suma = numero1 + numero2 + numero3 + numero4 + numero5;
let promedio = suma / 5;

//Acá se muestra en consola el resultado de la suma y promedio de los cinco números ingresados
console.log("EJERCICIO 5")
console.log(`
    Suma: ${suma}
    Promedio: ${promedio}
`)

