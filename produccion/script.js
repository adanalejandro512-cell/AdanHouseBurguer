function abrirNotificaciones() {
    const panel =
        document.getElementById("panelNotificaciones");
    panel.classList.toggle("activo");
}
function cerrarSesion() {

    // Regresar al login
    window.location.href = "../index.html";

}