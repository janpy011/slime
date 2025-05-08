const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const jumpBtn = document.getElementById('jump-btn');
const scoreDisplay = document.getElementById('score');

let score = 0;

// Função de pulo
function jump() {
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump');
        setTimeout(() => {
            dino.classList.remove('jump');
        }, 500);
    }
}

// Pulo com espaço
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        jump();
    }
});

// Pulo com botão mobile
jumpBtn.addEventListener('click', () => {
    jump();
});

// Contador de score
const scoreInterval = setInterval(() => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
}, 100);

// Verificação de colisão
const checkCollision = setInterval(() => {
    const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    const cactusRight = parseInt(window.getComputedStyle(cactus).getPropertyValue('right'));
    const cactusWidth = parseInt(window.getComputedStyle(cactus).getPropertyValue('width'));
    const gameWidth = document.querySelector('.game-container').clientWidth;

    const cactusLeft = gameWidth - cactusRight - cactusWidth;

    if (cactusLeft < 90 && cactusLeft > 50 && dinoBottom <= 50) {
        clearInterval(scoreInterval);
        alert(`Game Over!\nSeu score foi: ${score}`);
        location.reload();
    }
}, 10);
