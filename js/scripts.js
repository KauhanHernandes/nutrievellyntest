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
        disable: function () {
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
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

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

    // Função para mover o carrossel manualmente
    function moveCarousel(direction) {
        const currentTransform = gsap.getProperty(carousel, 'x') || 0;
        const moveDistance = (cardWidth + spacing) * direction;

        gsap.to(carousel, {
            x: currentTransform + moveDistance,
            duration: 0.5,
            ease: 'power2.inOut'
        });
    }

    // Configurar botões de navegação
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            moveCarousel(1); // Move para a direita
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            moveCarousel(-1); // Move para a esquerda
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
