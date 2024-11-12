document.addEventListener('DOMContentLoaded', function() {
    const especialidades = [
        "Cardiologia",
        "Dermatologia",
        "Pediatria",
        "Ortopedia",
        "Neurologia"
    ];

    const tableBody = document.getElementById('especialidadesTableBody');
    especialidades.forEach(especialidade => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = especialidade;
        row.appendChild(cell);
        tableBody.appendChild(row);
    });
});
