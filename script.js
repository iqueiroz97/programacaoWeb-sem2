function entrar() {
    var usuario = document.getElementById(`textoUsuario`).value;
    var senha = document.getElementById(`textoSenha`).value;

    if (usuario == "admin" && senha == 1234) {
        window.location.href = "index.html";
    } else {
        alert(`Usuário ou senha inválidos`);
    }
}