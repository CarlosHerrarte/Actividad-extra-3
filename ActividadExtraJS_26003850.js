let jugar = true;

while (jugar) {

    // 1. Número aleatorio de la computadora (1 a 9)
    let numeroComputadora = Math.floor(Math.random() * 9) + 1;

    // 2. Pedir número al usuario (entre 3 y 6)
    let numeroUsuario;

    do {
        numeroUsuario = parseInt(prompt("Ingresa un número entre 3 y 6:"));
    } while (numeroUsuario < 3 || numeroUsuario > 6);

    // 3. Pedir la adivinanza
    let eleccion = prompt("¿Tu número es MAYOR, MENOR o IGUAL al de la computadora?").toLowerCase();

    // 4. Determinar el resultado real
    let resultadoReal;
    if (numeroUsuario > numeroComputadora) {
        resultadoReal = "mayor";
    } else if (numeroUsuario < numeroComputadora) {
        resultadoReal = "menor";
    } else {
        resultadoReal = "igual";
    }

    // 5. Verificar si adivinó
    if (eleccion === resultadoReal) {
        alert(`La computadora eligió ${numeroComputadora}, tú elegiste ${numeroUsuario}.
Tu selección es ${resultadoReal}. ¡Has adivinado! 🏆`);
    } else {
        alert(`La computadora eligió ${numeroComputadora}, tú elegiste ${numeroUsuario}.
Tu selección es ${eleccion}. No adivinaste 😅`);
    }

    // 6. Preguntar si desea jugar otra vez
    let respuesta = prompt("¿Quieres jugar otra vez? (SI / NO)").toUpperCase();

    if (respuesta !== "SI") {
        let nombre = prompt("Ingresa tu nombre:");
        let carnet = prompt("Ingresa tu número de carnet:");
        alert(`Gracias por jugar ${nombre}. Carnet: ${carnet}`);
        jugar = false;
    }
}