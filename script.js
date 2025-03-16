var loginUsuario = "admin";
var loginSenha = 1234;

function mostraSenha() {
    let elementoSenha = document.getElementById("textoSenha");
    let mostrarSenha = document.getElementById("mostrarSenha");

    if (mostrarSenha.checked) {
        elementoSenha.type = "text";
    } else {
        elementoSenha.type = "password";
    }
}

function entrar() {
    let elementoUsuario = document.getElementById("textoUsuario");
    let elementoSenha = document.getElementById("textoSenha");

    if (elementoUsuario.value === loginUsuario && elementoSenha.value == loginSenha) {
        alert("Login bem-sucedido!")
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha inválidos");
    }
}