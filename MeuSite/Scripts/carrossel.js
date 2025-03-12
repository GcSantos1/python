// Função para avançar para o próximo item do carrossel
function nextItem() {
    const items = document.querySelectorAll('.fruit-item');
    const panels = document.querySelectorAll('.content-panel');
    let currentIndex = -1;

    // Encontra o índice do item ativo
    items.forEach((item, index) => {
        if (item.classList.contains('active')) {
            currentIndex = index;
        }
    });

    // Remove a classe active do item e painel atuais
    if (currentIndex !== -1) {
        items[currentIndex].classList.remove('active');
        panels[currentIndex].classList.remove('active');
    }

    // Calcula o próximo índice
    const nextIndex = (currentIndex + 1) % items.length;

    // Adiciona a classe active ao próximo item e painel
    items[nextIndex].classList.add('active');
    panels[nextIndex].classList.add('active');
}

// Configura o intervalo para avançar automaticamente a cada 2 segundos
let interval = setInterval(nextItem, 2000);

// Pausar o carrossel no hover
const carousel = document.querySelector('.fruit-carousel');

carousel.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

carousel.addEventListener('mouseleave', () => {
    interval = setInterval(nextItem, 2000);
});

// Funcionalidade básica do carrossel (clique manual)
document.querySelectorAll('.fruit-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove a classe active de todos os itens
        document.querySelectorAll('.fruit-item').forEach(i => i.classList.remove('active'));
        // Adiciona a classe active ao item clicado
        this.classList.add('active');
        
        // Esconde todos os painéis de conteúdo
        document.querySelectorAll('.content-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        
        // Mostra o painel correspondente
        const target = this.getAttribute('data-fruit');
        document.getElementById(target).classList.add('active');
    });
});