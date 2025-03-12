function validarFormulario() {
    // Coletar os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const tel = document.getElementById('movel').value.trim();
    const email = document.getElementById('email').value.trim();
    const marca = document.getElementById('marca').value.trim();
    const modelo = document.getElementById('modelo').value.trim();
    const placa = document.getElementById('placa').value.trim();
    const servico = document.getElementById('servico').value.trim();
    const data = document.getElementById('data').value.trim();
    const hora = document.getElementById('hora').value.trim();

    // Verificar se os campos obrigatórios estão preenchidos
    if (!nome || !tel || !email || !marca || !modelo || !placa || !servico || !data || !hora) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false; // Impede o envio do formulário
    }

    // Armazenar os dados no localStorage
    const dados = {
        nome,
        tel,
        email,
        marca,
        modelo,
        placa,
        servico,
        data,
        hora
    };
    localStorage.setItem('notaFiscal', JSON.stringify(dados));

    // Redirecionar para a página de exibição
    window.location.href = 'nota-fiscal.html';
    return false; // Impede o recarregamento da página
}