window.addEventListener('load', () => {
    const headerContent = document.querySelector('.header-content');
    if (headerContent) {
        headerContent.classList.add('header-fade-in');

        setTimeout(() => {
            headerContent.classList.add('show');
        }, 500);
    }

    // Inicializa o AOS (Animate On Scroll)
    AOS.init({
        duration: 1200,
        once: true, 
        offset: window.innerWidth <= 768 ? 100 : 200, 
        disable: function() {
            return window.innerWidth < 600;
        }
    });
});


// Inicializar botões de modais
const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');
const closeModalButtons = document.querySelectorAll('.btn-close');

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Placeholder para lógica adicional
    });
});

// Configuração do carrossel
const cardWidth = 250;
const spacing = 20;
const carousel = document.querySelector('.carousel');

if (carousel) {
    let animation = null;

    // Função para iniciar a animação contínua do carrossel
    function animateCarousel() {
        animation = gsap.to(carousel, {
            x: `-=${cardWidth + spacing}`,
            duration: 5,
            ease: 'linear',
            repeat: -1,
        });
    }

    // Pausar animação ao passar o mouse sobre o carrossel
    carousel.addEventListener('mouseenter', () => {
        if (animation) {
            animation.pause();
        }
    });

    // Retomar animação ao sair o mouse do carrossel
    carousel.addEventListener('mouseleave', () => {
        if (animation) {
            animation.resume();
        }
    });

    // Inicia a animação contínua
    animateCarousel();
}
