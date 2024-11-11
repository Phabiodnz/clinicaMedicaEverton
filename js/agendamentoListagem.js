// Função para editar um agendamento
function editarAgendamento(id) {
    alert("Editar agendamento com ID: " + id);
    // Aqui você pode redirecionar para a tela de edição do agendamento, por exemplo:
    // window.location.href = "editar_agendamento.html?id=" + id;
}

// Função para excluir um agendamento
function excluirAgendamento(id) {
    const confirmacao = confirm("Tem certeza que deseja excluir o agendamento com ID: " + id + "?");

    if (confirmacao) {
        // Aqui você faria a chamada para o backend para excluir o agendamento
        // Exemplo: enviar uma requisição para o servidor para deletar o agendamento
        alert("Agendamento com ID: " + id + " excluído com sucesso!");

        // Para fins de simulação, podemos remover a linha da tabela (se for uma operação local)
        const linhaAgendamento = document.querySelector(`tr td:first-child:contains('${id}')`).parentElement;
        linhaAgendamento.remove();
    }
}
