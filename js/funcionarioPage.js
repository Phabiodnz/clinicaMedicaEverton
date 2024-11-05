function validarFormulario(event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cargo = document.getElementById('cargo').value;

    if(!nome || !email || !telefone || !cargo){
        event.preventDefault();
        alert('Por favor, preencha todos os campos!');
        return false;
    }

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
    event.preventDefault();
    alert('Por favor, insira um e-mail válido.');
    return false;
    }

    if (telefone.lenght < 10){
        event.preventDefault();
        alert('O telefone deve ter pelo menos 10 caracteres.');
        return false;
    }

    return true;
    }
