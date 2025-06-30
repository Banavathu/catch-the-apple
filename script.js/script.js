const basket = document.getElementById('basket');
const apple = document.getElementById('apple');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');

let basketX = 180;
let appleY = 0;
let appleX = Math.floor(Math.random() * 370);
let score = 0;
let lives = 3;
let gameRunning = true;

document.addEventListener('keydown', moveBasket);

function moveBasket(e) {
  if (e.key === 'ArrowLeft' && basketX > 0) {
    basketX -= 20;
  } else if (e.key === 'ArrowRight' && basketX < 340) {
    basketX += 20;
  }
  basket.style.left = basketX + 'px';
}

function dropApple() {
  if (!gameRunning) return;

  appleY += 5;
  apple.style.top = appleY + 'px';
  apple.style.left = appleX + 'px';

  // Check if apple hits basket
  if (appleY > 470 && appleX > basketX - 20 && appleX < basketX + 60) {
    score++;
    scoreDisplay.textContent = score;
    resetApple();
  }

  // Missed the apple
  if (appleY > 500) {
    lives--;
    livesDisplay.textContent = lives;
    if (lives === 0) {
      gameRunning = false;
      alert('Game Over! Final Score: ' + score);
      return;
    }
    resetApple();
  }

  requestAnimationFrame(dropApple);
}

function resetApple() {
  appleY = 0;
  appleX = Math.floor(Math.random() * 370);
}

dropApple();
