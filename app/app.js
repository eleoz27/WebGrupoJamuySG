// Obtener las referencias a los elementos del slider
var slider = document.querySelector('.slider');
var leftButton = document.getElementById('left');
var rightButton = document.getElementById('right');
var slides = slider.getElementsByClassName('slider-content');

var currentSlide = 0; // Índice de la diapositiva actual

// Función para mostrar la diapositiva actual
function showSlide(index) {
    // Ocultar todas las diapositivas
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        slides[i].querySelector('.slider-content-img img').classList.remove('active');
    }

    // Mostrar la diapositiva actual
    slides[index].classList.add('active');
    slides[index].querySelector('.slider-content-img img').classList.add('active'); // Nueva línea
}

// Mostrar la primera diapositiva al cargar la página
showSlide(currentSlide);

// Función para ir a la diapositiva anterior
function goToPreviousSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

// Función para ir a la siguiente diapositiva
function goToNextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Agregar eventos de clic a los botones
leftButton.addEventListener('click', goToPreviousSlide);
rightButton.addEventListener('click', goToNextSlide);


