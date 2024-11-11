// Função para editar um paciente
function editarPaciente(id) {
    alert("Editar paciente com ID: " + id);
    // Aqui você pode redirecionar para a tela de edição, por exemplo:
    // window.location.href = "editar_paciente.html?id=" + id;
}

// Função para excluir um paciente
function excluirPaciente(id) {
    const confirmacao = confirm("Tem certeza que deseja excluir o paciente com ID: " + id + "?");
    
    if (confirmacao) {
        // Aqui você faria a chamada para o backend para excluir o paciente
        // Exemplo: enviar uma requisição para o servidor para deletar o paciente
        alert("Paciente com ID: " + id + " excluído com sucesso!");
        
        // Para fins de simulação, podemos remover a linha da tabela (se for uma operação local)
        const linhaPaciente = document.querySelector(`tr td:first-child:contains('${id}')`).parentElement;
        linhaPaciente.remove();
    }
}
