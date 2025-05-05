const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        if (!dino.classList.contains('jump')) {
            dino.classList.add('jump');
            setTimeout(() => {
                dino.classList.remove('jump');
            }, 500);
        }
    }
});

const checkCollision = setInterval(() => {
    const dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue('bottom'));
    const cactusRight = parseInt(window.getComputedStyle(cactus).getPropertyValue('right'));
    const cactusWidth = parseInt(window.getComputedStyle(cactus).getPropertyValue('width'));
    const gameWidth = document.querySelector('.game-container').clientWidth;

    const cactusLeft = gameWidth - cactusRight - cactusWidth;

    if (cactusLeft < 90 && cactusLeft > 50 && dinoBottom <= 50) {
        alert('Game Over!');
        location.reload();
    }
}, 10);
