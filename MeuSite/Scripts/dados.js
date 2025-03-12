const dados = {
  novas: {
    card1: {
      imagem: "Imagens/Motos/Trail/xre.png",
      titulo: "Modelo XRE 300",
      texto: [
        "⚙️Motor: 300cc injeção eletrônica",
        "🛞 Suspensão: Amortecimento para encarar qualquer terreno",
        "⛽ Tanque: 13,8L para viagens mais longas",
        "🛣️ Ideal para: Estradas, trilhas e uso urbano "
      ]
    },
    card2: {
      imagem: "Imagens/Motos/Trail/Lander.png",
      titulo: "Modelo XTZ 250 Lander",
      texto: [
        "⚙️Motor: 250cc, injeção eletrônica",
        "🛞 Suspensão: Longo curso, ideal para encarar qualquer desafio",
        "⛽ Tanque: 13,6L para rodar sem problemas",
        "🛣️ Ideal para: Trilhas, estradas e uso urbano"
      ]
    },
    card3: {
      imagem: "Imagens/Motos/Trail/versys.png",
      titulo: "Modelo Versys 300",
      texto: [
        "⚙️Motor: 300cc bicilíndrico, injeção eletrônica",
        "🛞 Suspensão: Ajustada para estabilidade e conforto",
        "⛽ Tanque: 17L para maior autonomia",
        "🛣️ Ideal para: Viagens, estrada e uso urbano"
      ]
    }
  },
  seminovas: {
    card1: {
      imagem: "Imagens/Motos/Scooter/pcx.png",
      titulo: "Modelo PCX",
      texto: [
        "⚙️ Motor: 160cc eSP+, injeção eletrônica, arrefecimento",
        "🛞 Suspensão: Ajustada para conforto e estabilidade",
        "⛽ Tanque: 8L para mais autonomia no dia a dia",
        "🛣️ Ideal para: Mobilidade urbana com praticidade e economia"
      ]
    },
    card2: {
      imagem: "Imagens/Motos/Scooter/adv.png",
      titulo: "Modelo ADV",
      texto: [
        "⚙️ Motor: 160cc eSP+, injeção eletrônica, arrefecimento a ar",
        "🛞 Suspensão: Longo curso, ideal para diferentes terrenos",
        "⛽ Tanque: 8L para mais autonomia e liberdade",
        "🛣️ Ideal para: Aventura, mobilidade urbana e passeios fora de estrada"
      ]
    },
    card3: {
      imagem: "Imagens/Motos/Scooter/neo.png",
      titulo: "Modelo Neo",
      texto: [
        "⚙️ Motor: 150cc, injeção eletrônica, arrefecimento a ar",
        "🛞 Suspensão: Ideal para conforto e estabilidade nas ruas",
        "⛽ Tanque: 6,6L para maior autonomia urbana",
        "🛣️ Ideal para: Mobilidade urbana com estilo e praticidade"
      ]
    }
  },
  promocoes: {
    card1: {
      imagem: "imagens/Motos/Populares/factor.png",
      titulo: "Modelo Factor 150",
      texto: [
        "⚙️ Motor: 150cc, injeção eletrônica, arrefecimento a ar",
        "🛞 Suspensão: Adaptada para o conforto no dia a dia",
        "⛽ Tanque: 12,4L para maior autonomia na cidade",
        "🛣️ Ideal para: Mobilidade urbana, agilidade e economia"
      ]
    },
    card2: {
      imagem: "imagens/Motos/Populares/titan.png",
      titulo: "Modelo Titan 160",
      texto: [
        "⚙️ Motor: 160cc, injeção eletrônica, arrefecimento a ar",
        "🛞 Suspensão: Equipada para conforto e estabilidade",
        "⛽ Tanque: 13,2L para maior autonomia no dia a dia",
        "🛣️ Ideal para: Mobilidade urbana, desempenho e economia"
      ]
    },
    card3: {
      imagem: "imagens/Motos/Populares/fact.png",
      titulo: "Modelo Factor 125",
      texto: [
        "⚙️ Motor: 125cc, injeção eletrônica, arrefecimento a ar",
        "🛞 Suspensão: Ajustada para o conforto e agilidade na cidade",
        "⛽ Tanque: 12L para maior autonomia no trânsito urbano",
        "🛣️ Ideal para: Mobilidade urbana, economia e praticidade"
      ]
    }
  }
};

// Função para atualizar os cards com base na categoria selecionada
function atualizarCards(categoria) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ""; // Limpa o conteúdo atual

  for (let i = 1; i <= 3; i++) {
    const cardData = dados[categoria][`card${i}`];

    const cardHTML = `
      <div class="col-md-4">
        <div class="card imagem mb-3">
          <img src="${cardData.imagem}" class="card-img-top" alt="${cardData.titulo}">
          <div class="card-body bg-custom">
            <h5 class="card-title">${cardData.titulo}</h5>
            <ul>${cardData.texto.map(item => `<li>${item}</li>`).join("")}</ul>
          </div>
        </div>
      </div>
    `;

    cardContainer.innerHTML += cardHTML;
  }
}

// Event listeners para os botões
document.getElementById("btnNovas").addEventListener("click", function (e) {
  e.preventDefault();
  atualizarCards("novas");
});

document.getElementById("btnSeminovas").addEventListener("click", function (e) {
  e.preventDefault();
  atualizarCards("seminovas");
});

document.getElementById("btnPromocoes").addEventListener("click", function (e) {
  e.preventDefault();
  atualizarCards("promocoes");
});

// Inicializa com a categoria "novas"
atualizarCards("novas");