
// Funciones para que el slider haga scroll lateral
const slider = document.querySelector('.slider');
const container = document.querySelector('.slider-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.style.cursor = 'grabbing';
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = container.scrollLeft;
});

document.addEventListener('mouseup', () => {
    isDown = false;
    slider.style.cursor = 'grab';
});

document.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
});


// Funcion para que el botón suba suavecito arriba de la página
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

