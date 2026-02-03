let musicPlaying = false;
let music;

window.onload = function () {
    music = document.getElementById("bgMusic");
    // Initialize fade for page 1 on load
    const fades = document.querySelectorAll('#page1 .fade');
    fades.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2}s`;
    });
};

function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.add('hidden');
    });

    const next = document.getElementById('page' + pageNumber);
    if (next) {
        next.classList.remove('hidden');

        const fades = next.querySelectorAll('.fade');
        fades.forEach((el, index) => {
            el.style.animation = 'none';
            el.offsetHeight; // force reflow
            el.style.animation = `fadeUp 1s ease forwards`;
            el.style.animationDelay = `${index * 0.2}s`;
        });
    }
}

function startExperience() {
    // 1. Trigger the music (Crucial for GitHub/Browsers)
    if (music) {
        music.volume = 0.25;
        music.play().then(() => {
            musicPlaying = true;
        }).catch(err => console.log("Audio play blocked: ", err));
    }
    
    // 2. Go to page 2
    nextPage(2);
}

/* ---------- NO BUTTON ---------- */
function moveNo(btn) {
    btn.style.position = 'absolute';
    // Using a safe range so it doesn't leave the screen
    btn.style.left = Math.random() * 80 + '%';
    btn.style.top = Math.random() * 80 + '%';
}

/* ---------- YES BUTTON ---------- */
function yes() {
    nextPage(5);
    startHearts();
}

/* ---------- HEART ANIMATION ---------- */
function startHearts() {
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.textContent = "💖";
        heart.className = "floating-heart"; // Ensure this class exists in CSS or use inline styles below
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = Math.random() * 16 + 18 + "px";
        heart.style.zIndex = "1000";
        heart.style.pointerEvents = "none";
        heart.style.animation = "floatUp 3s ease-out forwards";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

/* ---------- MUSIC TOGGLE ---------- */
function toggleMusic() {
    if (!music) return;

    if (!musicPlaying) {
        music.volume = 0.25;
        music.play();
        musicPlaying = true;
    } else {
        music.pause();
        musicPlaying = false;
    }
}
