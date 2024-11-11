// Função para exibir ou esconder o campo de convênio
document.getElementById('tem-convenio').addEventListener('change', function() {
    const convenioDiv = document.getElementById('convenio-div');
    if (this.value === 'sim') {
        convenioDiv.style.display = 'flex'; // Exibe o campo de convênio
    } else {
        convenioDiv.style.display = 'none'; // Esconde o campo de convênio
    }
});

// Função de validação do formulário
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
    const dataNascimento = document.getElementById('data-nascimento').value;
    const sexo = document.getElementById('sexo').value;
    const temConvenio = document.getElementById('tem-convenio').value;
    const nomeConvenio = document.getElementById('nome-convenio').value;

    // Verificar se todos os campos obrigatórios foram preenchidos
    if (!nome || !rg || !orgaoEmissor || !cpf || !endereco || !numero || !bairro || !cidade || !estado || !telefone || !celular || !dataNascimento || !sexo || !temConvenio) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos obrigatórios!');
        return false;
    }

    // Se o paciente tiver convênio, verificar se o nome do convênio foi preenchido
    if (temConvenio === 'sim' && !nomeConvenio) {
        event.preventDefault();
        alert('Por favor, preencha o nome do convênio!');
        return false;
    }

    return true;
}

// Associando a função ao evento submit do formulário
document.getElementById('cadastro-paciente').addEventListener('submit', validarFormulario);
