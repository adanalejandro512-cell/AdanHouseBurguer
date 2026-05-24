function abrirCarrito() {
    document.getElementById('carrito').classList.add('active');

}
function cerrarCarrito() {
    document.getElementById('carrito').classList.remove('active');
}
function abrirNotificaciones() {
    document.getElementById('notificaciones').classList.add('active');
}
function cerrarNotificaciones() {
    document.getElementById('notificaciones').classList.remove('active');
}
function abrirChat() {
    document.getElementById('chat').classList.add('active');
}
function cerrarChat() {
    document.getElementById('chat').classList.remove('active');
}
function agregarCarrito(producto) {
    const lista = document.getElementById('lista-carrito');
    const item = document.createElement('p');
    item.textContent = producto;
    lista.appendChild(item);
    alert(producto + ' agregado al carrito');
}
function cerrarSesion() {

    // Regresar al login
    window.location.href = "../index.html";

}