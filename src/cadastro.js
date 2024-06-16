function cadastrarUsuario(event) {
    event.preventDefault();
    var nome = document.getElementById("nomeCompleto");
    var email = document.getElementById("email");
    var data = document.getElementById("data");
    var nomeMae = document.getElementById("nomeMaterno");
    var documento = document.getElementById("cpf");
    var telefoneCelular = document.getElementById("telefoneCelular");
    var telefoneFixo = document.getElementById("telefoneFixo");
    var login = document.getElementById("login");
    var senha = document.getElementById("senha");
    var confirmarSenha = document.getElementById("senhaConfirmar");
    var cep = document.getElementById("cep");
    var logradouro = document.getElementById("logradouro");
    var numeroCasa = document.getElementById("numero");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var estado = document.getElementById("estado");

    if(nome.value!= "" &&
        email.value!= "" &&
        data.value!= "" &&
        nomeMae.value!= "" &&
        documento.value!= "" &&
        telefoneCelular.value!= "" &&
        telefoneFixo.value!= "" &&
        login.value!= "" &&
        senha.value!= "" &&
        confirmarSenha!= "" &&
        cep.value!= "" &&
        logradouro.value!= "" && 
        numeroCasa.value!= "" &&
        bairro.value!= "" &&
        cidade.value!= "" &&
        estado.value!= "") {
            localStorage.setItem("nomeCompleto", nome.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("data", data.value);
            localStorage.setItem("data", data.value);
            localStorage.setItem("nomeMaterno", nomeMae.value);
            localStorage.setItem("cpf", documento.value);
            localStorage.setItem("telefoneCelular", telefoneCelular.value);
            localStorage.setItem("telefoneFixo", telefoneFixo.value);
            localStorage.setItem("login", login.value);
            localStorage.setItem("senha", senha.value);
            localStorage.setItem("senhaConfirmar", confirmarSenha.value);
            localStorage.setItem("cep", cep.value);
            localStorage.setItem("logradouro", logradouro.value);
            localStorage.setItem("numero", numeroCasa.value);
            localStorage.setItem("bairro", bairro.value);
            localStorage.setItem("cidade", cidade.value);
            localStorage.setItem("estado", estado.value);

            alert("Usuario Cadastrado com Sucesso.");
            window.location = "./login.html";
        } else {
        }
}
