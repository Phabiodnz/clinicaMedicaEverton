// Array de exemplo com os funcionários cadastrados (normalmente, isso viria do servidor)
const funcionarios = [
    { id: 1, nome: "Matheus Santos", email: "matheus@email.com", cargo: "Desenvolvedor" },
    { id: 2, nome: "Ana Souza", email: "ana@email.com", cargo: "Médico" },
    { id: 3, nome: "Carlos Pereira", email: "carlos@email.com", cargo: "Secretário" }
];

let funcionarioSelecionado = null;

// Função para renderizar a lista de funcionários na tabela
function renderizarTabela() {
    const tabela = document.getElementById('tabela-funcionarios').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    funcionarios.forEach(funcionario => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${funcionario.id}</td>
            <td>${funcionario.nome}</td>
            <td>${funcionario.email}</td>
            <td>${funcionario.cargo}</td>
            <td>
                <button onclick="selecionarFuncionario(${funcionario.id})">Excluir</button>
            </td>
        `;

        tabela.appendChild(tr);
    });
}

// Função para selecionar o funcionário para exclusão
function selecionarFuncionario(id) {
    funcionarioSelecionado = funcionarios.find(func => func.id === id);
    const confirmacaoExclusao = document.getElementById('confirmacao-exclusao');
    confirmacaoExclusao.classList.remove('hidden');
}

// Função para confirmar a exclusão do funcionário
document.getElementById('confirmar-exclusao').addEventListener('click', function() {
    if (funcionarioSelecionado) {
        // Remover o funcionário da lista
        const index = funcionarios.indexOf(funcionarioSelecionado);
        if (index !== -1) {
            funcionarios.splice(index, 1);
        }

        // Atualizar a tabela
        renderizarTabela();
    }

    // Ocultar a confirmação de exclusão
    document.getElementById('confirmacao-exclusao').classList.add('hidden');
    funcionarioSelecionado = null;
});

// Função para cancelar a exclusão
document.getElementById('cancelar-exclusao').addEventListener('click', function() {
    document.getElementById('confirmacao-exclusao').classList.add('hidden');
    funcionarioSelecionado = null;
});

// Inicializa a página renderizando a lista de funcionários
renderizarTabela();
