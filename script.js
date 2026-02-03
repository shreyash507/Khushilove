function nextPage(pageNumber) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.add('hidden');
  });

  const next = document.getElementById('page' + pageNumber);
  next.classList.remove('hidden');

  const fades = next.querySelectorAll('.fade');

  fades.forEach((el, index) => {
    el.style.animation = 'none';
    el.offsetHeight; // force reflow
    el.style.animation = `fadeUp 1s ease forwards`;
    el.style.animationDelay = `${index * 0.2}s`;
  });
}

function startExperience() {
  nextPage(2);

  if (!musicPlaying && music) {
    music.volume = 0.25;
    music.play();
    musicPlaying = true;
  }
}

/* ---------- NO BUTTON ---------- */
function moveNo(btn) {
  btn.style.position = 'absolute';
  btn.style.left = Math.random() * 70 + '%';
  btn.style.top = Math.random() * 70 + '%';
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
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 16 + 18 + "px";
    heart.style.animation = "floatUp 3s ease-out forwards";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}

/* ---------- MUSIC ---------- */
let musicPlaying = false;
let music;

window.onload = function () {
  music = document.getElementById("bgMusic");
};

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
window.addEventListener("load", () => {
  const fades = document.querySelectorAll('#page1 .fade');
  fades.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
  });
});
