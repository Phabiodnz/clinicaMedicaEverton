document.getElementById('cargo').addEventListener('change', function() {
    const crmDiv = document.getElementById('crm-div');
    const crmInput = document.getElementById('crm');

    // Se o cargo for Médico, exibe o campo de CRM
    if (this.value === 'medico') {
        crmDiv.style.display = 'block';
        crmInput.setAttribute('required', 'required');
    } else {
        crmDiv.style.display = 'none';
        crmInput.removeAttribute('required');
    }
});

function validarFormulario(event) {
    const nome = document.getElementById('nome').value;
    const rg = document.getElementById('rg').value;
    const orgaoEmissor = document.getElementById('orgao-emissor').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const telefone = document.getElementById('telefone').value;
    const celular = document.getElementById('celular').value;
    const ctps = document.getElementById('ctps').value;
    const pis = document.getElementById('pis').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const cargo = document.getElementById('cargo').value;
    const crm = document.getElementById('crm').value;

    // Verificação de campos obrigatórios
    if (!nome || !rg || !orgaoEmissor || !cpf || !endereco || !numero || !bairro || !cidade || !estado || !telefone || !celular || !ctps || !pis || !dataNascimento || !cargo) {
        event.preventDefault();  // Impede o envio do formulário
        alert('Por favor, preencha todos os campos obrigatórios!');
        return false;
    }

    // Validação do CPF - pode ser mais avançada, mas para o exemplo, vamos usar uma simples
    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!regexCpf.test(cpf)) {
        event.preventDefault(); // Impede o envio do formulário
        alert('Por favor, insira um CPF válido (XXX.XXX.XXX-XX)');
        return false;
    }

    // Validação do RG
    const regexRg = /^\d{1,2}\.\d{3}\.\d{3}$/;
    if (!regexRg.test(rg)) {
        event.preventDefault();
        alert('Por favor, insira um RG válido (XX.XXX.XXX)');
        return false;
    }

    // Se o cargo for "Médico", validar o CRM
    if (cargo === 'medico' && (!crm || crm.length < 5)) {
        event.preventDefault();
        alert('Por favor, insira um número de CRM válido.');
        return false;
    }

    // Validação do telefone e celular - formato simples
    const regexTelefone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!regexTelefone.test(telefone)) {
        event.preventDefault();
        alert('Por favor, insira um telefone válido no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX');
        return false;
    }

    return true; // Se não houver erros, o formulário pode ser enviado
}

// Associando a função ao evento submit do formulário
document.getElementById('cadastro-funcionario').addEventListener('submit', validarFormulario);
