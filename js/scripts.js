window.addEventListener('load', () => {
    const headerContent = document.querySelector('.header-content');
    headerContent.classList.add('header-fade-in');

    setTimeout(() => {
        headerContent.classList.add('show');
    }, 500);
});

AOS.init({
    duration: 1200,
});

const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

const closeModalButtons = document.querySelectorAll('.btn-close');

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
    });
});