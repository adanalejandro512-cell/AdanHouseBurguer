function login() {

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let tipo = document.getElementById("tipo").value;

    // USUARIO NORMAL
    if (usuario == "cliente" && password == "1234" && tipo == "usuario") {

        window.location.href = "usuario/usuario.html";
    }

    // PRODUCCION
    else if (usuario == "produccion" && password == "1234" && tipo == "produccion") {

        window.location.href = "produccion/produccion.html";
    }

    // DISTRIBUCION
    else if (usuario == "distribucion" && password == "1234" && tipo == "distribucion") {

        window.location.href = "distribucion/distribucion.html";
    }

    else {
        document.getElementById("mensaje").innerHTML =
            "Usuario o contraseña incorrectos";
    }

}