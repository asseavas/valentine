const title = document.querySelector('h1');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseText = document.getElementById('responseText');
const gif = document.querySelector('.gif');
const hoverSound = document.getElementById('hoverSound');
const yesSound = document.getElementById('yesSound');
const noSound = document.getElementById('noSound');

yesBtn.addEventListener('click', () => {
    responseText.textContent = 'Ура! Я так рада! 💖 💞';
    gif.src = 'https://i.pinimg.com/originals/b4/65/34/b46534530b0ef3ffac6636f068dd2e12.gif';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    title.style.color = 'transparent';
    title.style.height = '0';
    title.style.margin = '0';
});

yesBtn.addEventListener('click', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

noBtn.addEventListener('click', () => {
    responseText.textContent = 'Нет? Ну ладно, но ты всё равно моя валентинка! 🤭';
    gif.src = 'https://i.pinimg.com/originals/3e/47/7e/3e477e83c35e2a7a38f19ccdad163faa.gif';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    title.style.display = 'none';
});

// hearts animation

const canvas = document.getElementById('heartsCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener('mousemove', (e) => {
    const heart = new Heart();
    heart.x = e.clientX;
    heart.y = e.clientY;
    heart.size = 10;
    heart.speed = 1;
    hearts.push(heart);
});

const hearts = [];

class Heart {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.size = Math.random() * 20 + 10;
        this.speed = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? '#ff6f61' : '#ff3b2f';
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(this.x - this.size / 2, this.y - this.size / 4, this.x - this.size, this.y + this.size / 2, this.x, this.y + this.size);
        ctx.bezierCurveTo(this.x + this.size, this.y + this.size / 2, this.x + this.size / 2, this.y - this.size / 4, this.x, this.y);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = -50;
            this.x = Math.random() * canvas.width;
        }
        this.draw();
    }
}

function init() {
    for (let i = 0; i < 50; i++) {
        hearts.push(new Heart());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(heart => heart.update());
    requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// sounds

yesBtn.addEventListener('mouseenter', () => {
    hoverSound.play();
});

noBtn.addEventListener('mouseenter', () => {
    hoverSound.play();
});

yesBtn.addEventListener('click', () => {
    yesSound.play();
});

noBtn.addEventListener('click', () => {
    noSound.play();
});
