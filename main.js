let nombreProfe = "";
let contadorAprobados = 0;
let contadorDesaprobados = 0;
let totalAlumnos = 0;
let nombreAlumno = "";
let apellidoAlumno = "";
let nota = 0;
let promedio = 0;
let arrayAprobadosN = [];
let arrayAprobadosA = [];
let arrayDesaprobadosN = [];
let arrayDesaprobadosA = [];
let alumno = [
    {
        nombre: "",
        apellido: "",
        promedio: 0,
    },
];

// ====================== FUNCIONES ==========================

// FUNCION notaValida para validar que una nota sea del 1 al 10
function notaValida(numero) {
    numero = parseInt(numero);
    while (numero <= 0 || numero >= 11 || isNaN(numero)) {
        numero = prompt("Ingrese una nota valida: ");
        numero = parseInt(numero);
    }

    return numero;
}

// Función SOLO LETRAS
let soloLetra = (letra) => {
    letra = letra.trim(); // Eliminar espacios en blanco al inicio y al final
    while (!letra || !isNaN(letra)) {
        letra = prompt("Ingrese un nombre valido: ").trim(); // Solicitar el nombre hasta que sea válido
    }
    return letra;
}

// Función de búsqueda de apellido recorriendo el objeto
function buscarApellido(apellido) {
    let datobuscado = apellido.toUpperCase();
    let resultado = alumno.findIndex((elem) => {
        return elem.apellido === datobuscado
    });
    if (resultado === -1) {
        alert(apellido + ": No fue encontrado. Inténtelo nuevamente");
    } else {
        console.table(alumno[resultado]);
        console.log(alumno[resultado]);
    }
}

// DOM BOTON PARA BUSCAR APELLIDO
document.getElementById("clickMe").onclick = function () {
    let buscar = prompt("Apellido: ");
    if (buscar) {
        buscarApellido(buscar);
    } else {
        alert("Ingrese un apellido válido.");
    }
}; // DOM || FIN BOTON DE BUSCAR APELLIDO

///========================================= FIN FUNCIONES // =================================
nombreProfe = prompt("¡¡¡Hola Profesor!!!, ingrese su nombre... ");
nombreProfe = soloLetra(nombreProfe);

let opcMateria = 0;
parseInt(opcMateria);
opcMateria = prompt("Ingrese su materia: \n - 1: Matemática \n - 2: Práctica del lenguaje \n - 3: Cs. Sociales \n - 4: Cs. Naturales");
while (opcMateria <= 0 || opcMateria >= 5 || isNaN(opcMateria)) {
    opcMateria = prompt("ERROR!! Re ingrese su materia: \n - 1: Matemática \n - 2: Práctica del lenguaje \n - 3: Cs. Sociales \n - 4: Cs. Naturales");
    parseInt(opcMateria);
}
alert("Para salir/ finalizar presione 'ESC' en nombre del alumno");
do {
    let acumulador = 0;
    nombreAlumno = prompt("Nombre del alumno: ");
    if (nombreAlumno == null) {
        break;
    }
    soloLetra(nombreAlumno);
    if (nombreAlumno.toLowerCase() == "esc") {
        break;
    }
    nombreAlumno = nombreAlumno.toUpperCase();
    apellidoAlumno = prompt("Apellido del alumno: ");
    if (apellidoAlumno == null) {
        break;
    }
    soloLetra(apellidoAlumno);
    if (apellidoAlumno.toLowerCase() == "esc") {
        break;
    }
    apellidoAlumno = apellidoAlumno.toUpperCase();
    for (let i = 0; i < 2; i++) {
        parseInt(acumulador)
        parseInt(i);
        parseInt(nota);
        cuatrimestre = i + 1;
        nota = prompt("Nota del " + cuatrimestre + "° cuatrimestre:");
        nota = parseInt(notaValida(nota));
        acumulador = acumulador + nota;
    }
    parseInt(promedio = acumulador / 2);
    if (promedio >= 7) {
        alert("El alumno aprobó el año con un promedio de: " + promedio);
        contadorAprobados++;
        arrayAprobadosN.push(nombreAlumno);
        arrayAprobadosA.push(apellidoAlumno);
    } else {
        alert("El alumno obtuvo un promedio de: " + parseInt(promedio) + " y debe recuperar la materia");
        contadorDesaprobados++;
        arrayDesaprobadosN.push(nombreAlumno);
        arrayDesaprobadosA.push(apellidoAlumno);
    }
    totalAlumnos++;
    alumno.push({ nombre: nombreAlumno, apellido: apellidoAlumno, promedio: promedio })

} while (nombreAlumno.toLowerCase() != "esc");


alert("- El informe se mostrará por consola -");

// ...

// SALIDA DE DATOS
console.log("Nombre del profesor: " + nombreProfe);
let mostrarMateria = "";
switch (opcMateria) {
    case "1":
        mostrarMateria = "Matemática";
        break;
    case "2":
        mostrarMateria = "Práctica del lenguaje";
        break;
    case "3":
        mostrarMateria = "Cs. Sociales";
        break;
    case "4":
        mostrarMateria = "Cs Naturales";
        break;
}

if (totalAlumnos <= 0) {
    console.log("No se ingresaron datos de alumnos en " + mostrarMateria);
    document.getElementById("clickMe").onclick = function () { alert("No hay alumnos ingresados") };
} else {
    console.log("Informe sobre el total de los (" + totalAlumnos + ") alumnos de " + mostrarMateria + ": ");
    console.log("Total de alumnos Aprobados: " + contadorAprobados);
    console.log("Total de alumnos Desaprobados: " + contadorDesaprobados);

    for (let i = 0; i < arrayAprobadosA.length; i++) {
        if (i == 0) {
            console.log("==================================");
            console.log("=========  Aprobados:  ===========");
            console.log("==================================");
            console.log(" ");
        }
        let nombreMostrar = arrayAprobadosN[i];
        let apellidoMostrar = arrayAprobadosA[i];
        let nombreyapellido = nombreMostrar + " " + apellidoMostrar;
        console.log("Alumno: " + nombreyapellido);
    }

    console.log("");
    for (let i = 0; i < arrayDesaprobadosA.length; i++) {
        if (i == 0) {
            console.log("==================================");
            console.log("========= Desaprobados: ===========");
            console.log("==================================");
            console.log(" ");
        }
        let nombreMostrar = arrayDesaprobadosN[i];
        let apellidoMostrar = arrayDesaprobadosA[i];
        let nombreyapellido = nombreMostrar + " " + apellidoMostrar;
        console.log("Alumno: " + nombreyapellido);
    }
    console.log("");
    console.log("==================================");
}
