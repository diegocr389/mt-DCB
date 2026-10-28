
function ocultarTodo() {
    document.getElementById("principal").style.display = "none";

    const menus = document.querySelectorAll(".menu");
    menus.forEach(function(menu) {
        menu.style.display = "none";
    });

    const pantallas = document.querySelectorAll(".pantalla");
    pantallas.forEach(function(pantalla) {
        pantalla.style.display = "none";
    });
}

function mostrarTemas(modo) {
    ocultarTodo();

    if (modo === "practicar") {
        document.getElementById("menuPracticar").style.display = "block";
    }

    if (modo === "estudiar") {
        document.getElementById("menuEstudiar").style.display = "block";
    }
}

function abrirPantalla(id) {
    ocultarTodo();
    document.getElementById(id).style.display = "block";
}

function irInicio() {
    ocultarTodo();
    document.getElementById("principal").style.display = "flex";
}
