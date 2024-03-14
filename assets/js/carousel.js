const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
let counter = 0;
const totalSlides = slides.length;
let intervalID; // Para armazenar o ID do setInterval

// Função para avançar para o próximo slide
function nextSlide() {
    counter = (counter + 1) % totalSlides;
    showSlide(counter);
    resetInterval();
}

// Função para mostrar um slide específico
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
}

// Função para redefinir o intervalo
function resetInterval() {
    clearInterval(intervalID); // Limpa o intervalo atual
    intervalID = setInterval(nextSlide, 10000); // Define um novo intervalo
}

// Adiciona um evento de clique ao botão "next"
nextBtn.addEventListener('click', () => {
    nextSlide();
});

// Adiciona um evento de clique ao botão "prev"
prevBtn.addEventListener('click', () => {
    counter = (counter - 1 + totalSlides) % totalSlides;
    showSlide(counter);
    resetInterval();
});

// Adiciona eventos de mouse para rastrear o movimento do cursor
let startX;
let endX;

document.addEventListener('mousedown', (e) => {
    startX = e.clientX;
});

document.addEventListener('mouseup', (e) => {
    endX = e.clientX;
    if (startX - endX > 50) { // Verifica se houve um deslocamento suficiente para a esquerda
        nextSlide();
    } else if (endX - startX > 50) { // Verifica se houve um deslocamento suficiente para a direita
        counter = (counter - 1 + totalSlides) % totalSlides;
        showSlide(counter);
        resetInterval();
    }
});
