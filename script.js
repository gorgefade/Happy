// 🎵 الموسيقى
const music = document.getElementById("music");

function startParty() {
    music.play();

    setInterval(createHeart, 300);
    setInterval(createFirework, 700);
}

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// ❤️ قلوب طايرة
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart-float";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
}

// 🎆 ألعاب نارية
function createFirework() {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = Math.random() * 100 + "vw";
    firework.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(firework);

    setTimeout(() => firework.remove(), 2000);
}