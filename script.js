let musicPlaying = false;
let music;

window.onload = function () {
    music = document.getElementById("bgMusic");
    const fades = document.querySelectorAll('#page1 .fade');
    fades.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
};

function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    const next = document.getElementById('page' + pageNumber);
    if (next) {
        next.classList.remove('hidden');
        const fades = next.querySelectorAll('.fade');
        fades.forEach((el, index) => {
            el.style.animation = 'none';
            el.offsetHeight; 
            el.style.animation = `fadeUp 1s ease forwards`;
            el.style.animationDelay = `${index * 0.2}s`;
        });
    }
}

function startExperience() {
    if (music) {
        music.volume = 0.25;
        music.play().then(() => { musicPlaying = true; }).catch(e => console.log(e));
    }
    nextPage(2);
}

function moveNo(btn) {
    btn.style.position = 'fixed';
    btn.style.left = Math.random() * 80 + 'vw';
    btn.style.top = Math.random() * 80 + 'vh';
}

function yes() {
    nextPage(5);
    startHearts();
}

function startHearts() {
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.textContent = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.animation = "floatUp 3s ease-out forwards";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
}

function toggleMusic() {
    if (!music) return;
    musicPlaying ? music.pause() : music.play();
    musicPlaying = !musicPlaying;
}
