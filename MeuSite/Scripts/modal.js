document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os cards
    const cards = document.querySelectorAll('.card[data-bs-toggle="modal"]');

    // Adiciona um evento de clique a cada card
    cards.forEach(card => {
        card.addEventListener('click', function () {
            // Obtém os dados do card
            const videoSrc = card.getAttribute('data-video');
            const title = card.getAttribute('data-title');

            // Atualiza o modal com os dados do card
            const modalTitle = document.getElementById('cardModalLabel');
            const videoFrame = document.getElementById('videoFrame');
            modalTitle.textContent = title;
            videoFrame.src = videoSrc;
        });
    });

    // Limpa o vídeo ao fechar o modal
    const modal = document.getElementById('cardModal');
    modal.addEventListener('hidden.bs.modal', function () {
        const videoFrame = document.getElementById('videoFrame');
        videoFrame.src = ''; // Para o vídeo ao fechar o modal
    });
});