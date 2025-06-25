// Animasi konfeti sederhana
const colors = ["#ff4081", "#ffd700", "#87ceeb", "#e91e63"];

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}

setInterval(createConfetti, 300);

// Tambahkan style animasi konfeti
document.head.insertAdjacentHTML("beforeend", `
  <style>
    .confetti {
      position: fixed;
      top: -10px;
      width: 10px;
      height: 10px;
      opacity: 0.8;
      z-index: 999;
      animation: fall linear forwards;
    }

    @keyframes fall {
      to {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }
  </style>
`);
