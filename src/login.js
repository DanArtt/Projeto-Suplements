function confereUsuario(event) {
    event.preventDefault();
    
    let login = localStorage.getItem('login');
    let pass = localStorage.getItem('senha');

    var usuario = document.getElementById('login');
    var senha = document.getElementById('senha');

    if (login==usuario.value && pass==senha.value) {
        alert("Usuario Logado com Sucesso.")
        window.location.href = "./index.html";
    } else {
        alert("Usuario ou Senha Inválidos.");
    }
}