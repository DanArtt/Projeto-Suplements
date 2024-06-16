const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
const cpf = document.getElementById("cpf");
const telefoneCelular = document.getElementById("telefoneCelular");
const telefoneFixo = document.getElementById("telefoneFixo");

//Divisor de CPF
cpf.addEventListener("keypress", () => {
    let cpfLength = cpf.value.length;

    if (cpfLength === 3 || cpfLength === 7) {
        cpf.value += "."
    } else if (cpfLength === 11) {
        cpf.value += "-"
    }
})

//Adicona o +55 antes da digitação dos numeros no Telefone Celular
telefoneCelular.addEventListener("keypress", () => {
    let telefoneCelularLength = telefoneCelular.value.length;

    if (telefoneCelularLength === 0) {
        telefoneCelular.value += "+55 ";
    } else if (telefoneCelularLength === 7) {
        telefoneCelular.value += " ";
    } else if (telefoneCelularLength === 12) {
        telefoneCelular.value += " ";
    }
})

//Adicona o +55 antes da digitação dos numeros no Telefone Fixo
telefoneFixo.addEventListener("keypress", () => {
    let telefoneFixoLength = telefoneFixo.value.length;

    if (telefoneFixoLength === 0) {
        telefoneFixo.value += "+55 ";
    } else if (telefoneFixoLength === 10) {
        telefoneFixo.value += " ";
    }
})


form.addEventListener("submit", (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    dataValidate();
    nomeMaternoValidate();
    cpfValidate();
    telefoneCelularValidate();
    telefoneFixoValidate();
    loginValidate();
    senhaValidate();
    compareSenha();
    cepValidate();
    numeroValidate();
})

//Erro para o campo incorreto
function setError(index) {
    campos[index].style.border = "2px solid #FF8C00";
}
//Tira o erro se o campo for preenchido corretamente
function sucess(index) {
    campos[index].style.border = "2px solid #32CD32";
}
//Função para validar o campo do nome.
function nameValidate() {
    if (campos[0].value.length < 15 || campos[0].value.length > 80) {
        setError(0);
    } else {
        sucess(0);
    }
}

//Função para validar o email
function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    } else {
        sucess(1);
    }
}

function dataValidate() {
    if (!campos[4].value.length > 0) {
        setError(4);
    } else {
        sucess(4);
    }
}

function nomeMaternoValidate() {
    if (campos[5].value.length < 15 || campos[3].value.length > 80) {
        setError(5);
    } else {
        sucess(5);
    }
}

function cpfValidate() {
    if (campos[6].value.length < 14) {
        setError(6);
    } else {
        sucess(6);
    }
}

function telefoneCelularValidate() {
    if (campos[7].value.length < 17) {
        setError(7);
    } else {
        sucess(7);
    }
}

function telefoneFixoValidate() {
    if (campos[8].value.length < 15) {
        setError(8);
    } else {
        sucess(8);
    }
}

function loginValidate() {
    if (campos[9].value.length < 6) {
        setError(9);
    } else {
        sucess(9);
    }
}

function senhaValidate() {
    if (campos[10].value.length < 8) {
        setError(10);
    } else {
        sucess(10);
        compareSenha();
    }

}

function compareSenha() {
    if (campos[10].value == campos[11].value && campos[11].value.length >= 8) {
        sucess(11);
    } else {
        setError(11);
    }
}

function cepValidate() {
    if (campos[12].value.length < 8) {
        setError(12);
    } else {
        sucess(12);
    }
}



function numeroValidate() {
    if (campos[14].value.length < 1) {
        setError(14);
    } else {
        sucess(14);
    }
}


