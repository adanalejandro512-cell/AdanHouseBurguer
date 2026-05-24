function abrirNotificaciones() {

    const panel = document.getElementById("panel");

    panel.classList.toggle("mostrar");
}
function cerrarSesion() {

    // Regresar al login
    window.location.href = "../index.html";

}