document.addEventListener('DOMContentLoaded', function() {
    const btnNovas = document.getElementById('btnNovas');
    const btnSeminovas = document.getElementById('btnSeminovas');
    const btnPromocoes = document.getElementById('btnPromocoes');
  
    // Função para atualizar os cards
    function atualizarCards(categoria) {
      const cardData = dados[categoria];
      document.getElementById('cardImage1').src = cardData.card1.imagem;
      document.getElementById('cardTitle1').textContent = cardData.card1.titulo;
      document.getElementById('cardText1').textContent = cardData.card1.texto;
  
      document.getElementById('cardImage2').src = cardData.card2.imagem;
      document.getElementById('cardTitle2').textContent = cardData.card2.titulo;
      document.getElementById('cardText2').textContent = cardData.card2.texto;
  
      document.getElementById('cardImage3').src = cardData.card3.imagem;
      document.getElementById('cardTitle3').textContent = cardData.card3.titulo;
      document.getElementById('cardText3').textContent = cardData.card3.texto;
    }
  
    // Event listeners para os botões
    btnNovas.addEventListener('click', function(event) {
      event.preventDefault();
      atualizarCards('novas');
      setActiveButton(btnNovas);
    });
  
    btnSeminovas.addEventListener('click', function(event) {
      event.preventDefault();
      atualizarCards('seminovas');
      setActiveButton(btnSeminovas);
    });
  
    btnPromocoes.addEventListener('click', function(event) {
      event.preventDefault();
      atualizarCards('promocoes');
      setActiveButton(btnPromocoes);
    });
  
    // Função para destacar o botão ativo
    function setActiveButton(activeButton) {
      [btnNovas, btnSeminovas, btnPromocoes].forEach(button => {
        button.classList.remove('active');
      });
      activeButton.classList.add('active');
    }
  });