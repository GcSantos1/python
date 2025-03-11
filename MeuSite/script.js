document.addEventListener('DOMContentLoaded', function () {
  const btnNovas = document.getElementById('btnNovas');
  const btnSeminovas = document.getElementById('btnSeminovas');
  const btnPromocoes = document.getElementById('btnPromocoes');

  // Função para destacar o botão ativo
  function setActiveButton(activeButton) {
    // Remove a classe 'active' de todos os botões
    [btnNovas, btnSeminovas, btnPromocoes].forEach(button => {
      button.classList.remove('active');
    });

    // Adiciona a classe 'active' ao botão clicado
    activeButton.classList.add('active');
  }

  // Event listeners para os botões
  btnNovas.addEventListener('click', function (event) {
    event.preventDefault();
    setActiveButton(btnNovas);
  });

  btnSeminovas.addEventListener('click', function (event) {
    event.preventDefault();
    setActiveButton(btnSeminovas);
  });

  btnPromocoes.addEventListener('click', function (event) {
    event.preventDefault();
    setActiveButton(btnPromocoes);
  });

  // Inicializa com o botão "Novas" ativo
  setActiveButton(btnNovas);
});