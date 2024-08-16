// -- Variables -- //
let nombre = prompt("Cual es tu nombre?");
let edad = prompt("Cuantos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

//-- Concatenación de la variables --//
const msg = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}`;
alert(msg);

let opcion = prompt(`¿Te gusta estudiar ${lenguaje}?, responde 1 para SI y 2 para NO.`);

//-- Condicionales -- //
if (opcion == 1) {
    alert("1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (opcion == 2) {
    alert("2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
} else {
    alert("Respuesta no válida. Por favor, responde con 1 o 2.");
}

//-- EXPLICACION -- //
/*Este código primero solicita los datos del usuario mediante prompt(),
luego muestra el mensaje personalizado usando alert().
Si decides hacer el ejercicio opcional, el código también le pregunta
al usuario si le gusta estudiar el lenguaje y muestra un mensaje adecuado
según la respuesta. */