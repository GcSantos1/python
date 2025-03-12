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

    // Se tudo estiver ok, chama a função para exibir os dados
    exibirDados();
    return false; // Impede o recarregamento da página
}

function exibirDados() {
    // Coletar os dados do formulário
    const nome = document.getElementById('nome').value;
    const tel = document.getElementById('movel').value;
    const email = document.getElementById('email').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const placa = document.getElementById('placa').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    // Criar um container para a nota fiscal
    const container = document.createElement('div');
    container.className = 'nota-fiscal';

    // Criar o título da nota fiscal
    const titulo = document.createElement('h2');
    titulo.textContent = 'Nota Fiscal';
    container.appendChild(titulo);

    // Criar a lista de dados
    const lista = document.createElement('ul');
    lista.className = 'dados-nota';

    // Adicionar os dados à lista
    const dados = [
        { label: 'Nome', value: nome },
        { label: 'Telefone', value: tel },
        { label: 'Email', value: email },
        { label: 'Marca', value: marca },
        { label: 'Modelo', value: modelo },
        { label: 'Placa', value: placa },
        { label: 'Serviço', value: servico },
        { label: 'Data', value: data },
        { label: 'Hora', value: hora }
    ];

    dados.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;
        lista.appendChild(li);
    });

    // Adicionar a lista ao container
    container.appendChild(lista);

    // Limpar o conteúdo anterior e exibir a nota fiscal
    document.body.innerHTML = ''; // Limpa o conteúdo da página
    document.body.appendChild(container); // Adiciona a nota fiscal ao body
}