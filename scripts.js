window.addEventListener('load', () => {
    const headerContent = document.querySelector('.header-content');
    headerContent.classList.add('header-fade-in');

    setTimeout(() => {
        headerContent.classList.add('show');
    }, 500);
});

AOS.init();