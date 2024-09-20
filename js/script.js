// Slideshow automático com 11 imagens
const images = [
    'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg',
    'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg'
];
let index = 0;
const slideshowImg = document.getElementById('slideshowImg');

function changeImage() {
    index = (index + 1) % images.length;
    slideshowImg.src = images[index];
}

setInterval(changeImage, 3000); // Troca de imagem a cada 3 segundos

// Controle da carta
const envelope = document.getElementById('envelope');
const openEnvelope = document.getElementById('openEnvelope');
const closedEnvelope = document.getElementById('closedEnvelope');

closedEnvelope.addEventListener('click', function() {
    if (openEnvelope.style.display === 'none' || !openEnvelope.style.display) {
        openEnvelope.style.display = 'block';
    } else {
        openEnvelope.style.display = 'none';
    }
});

// Controle de música
const musicButton = document.getElementById('musicButton');
const musica = document.getElementById('musica');
let isPlaying = true;

musicButton.addEventListener('click', function() {
    if (isPlaying) {
        musica.pause();
        musicButton.textContent = '▶️'; // Muda ícone para "Play"
    } else {
        musica.play();
        musicButton.textContent = '⏸️'; // Muda ícone para "Pause"
    }
    isPlaying = !isPlaying;
});

// Efeito de corações em zig zag
const heartButton = document.getElementById('heartButton');

heartButton.addEventListener('click', function() {
    createHeart();
});

function createHeart() {
    const heart = document.createElement('img');
    heart.src = 'img/coracao.png'; // Imagem do coração
    heart.classList.add('zigzag-heart');
    heart.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
    document.body.appendChild(heart);
    
    // Remove o coração após a animação
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Efeito de abelhas
const beeButton = document.getElementById('beeButton');

beeButton.addEventListener('click', function() {
    createBee();
});

function createBee() {
    const bee = document.createElement('img');
    bee.src = 'img/abelha.png'; // Substitua pela imagem da abelha
    bee.classList.add('bee');
    bee.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
    document.body.appendChild(bee);
    
    // Remove a abelha após a animação
    bee.addEventListener('animationend', () => {
        bee.remove();
    });
}

// Contador
const startDate = new Date('2023-05-19T00:00:00');
const timerDisplay = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    const totalSeconds = Math.floor((now - startDate) / 1000);
    
    const years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
    const months = Math.floor((totalSeconds % (365 * 24 * 60 * 60)) / (30 * 24 * 60 * 60));
    const days = Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    timerDisplay.innerHTML = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos.`;
}

setInterval(updateTimer, 1000); // Atualiza a cada segundo
