
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");
const openGift = document.getElementById("openGift");
const gift = document.getElementById("gift");

let celebrationStarted = false;

// OPEN GIFT
function revealBirthday() {
  if (celebrationStarted) return;

  celebrationStarted = true;

  intro.style.transition = "opacity .8s";
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.classList.add("hidden");
    mainContent.classList.remove("hidden");

    window.scrollTo(0, 0);

    startBalloons();
    launchConfetti(100);
  }, 800);
}

openGift.addEventListener("click", revealBirthday);
gift.addEventListener("click", revealBirthday);

// BALLOONS
function startBalloons() {
  const container = document.getElementById("balloons");
  const balloonTypes = ["🎈", "🎈", "🎈", "💙", "💛", "🎈"];

  for (let i = 0; i < 22; i++) {
    setTimeout(() => {
      const balloon = document.createElement("div");

      balloon.className = "balloon";
      balloon.textContent =
        balloonTypes[Math.floor(Math.random() * balloonTypes.length)];

      balloon.style.left = Math.random() * 95 + "%";
      balloon.style.animationDuration = (6 + Math.random() * 7) + "s";

      container.appendChild(balloon);

      setTimeout(() => balloon.remove(), 14000);
    }, i * 450);
  }
}

// CONFETTI
function launchConfetti(amount = 60) {
  const container = document.getElementById("confetti");
  const colors = ["#ffdf79", "#ff6495", "#6ce6ff", "#a58bff", "#ffffff"];

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("div");

    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (2 + Math.random() * 4) + "s";
    piece.style.animationDelay = Math.random() * 2 + "s";

    container.appendChild(piece);

    setTimeout(() => piece.remove(), 7000);
  }
}

// BLOW CANDLES
const blowButton = document.getElementById("blowCandles");
const wishMessage = document.getElementById("wishMessage");

blowButton.addEventListener("click", () => {
  const candles = document.querySelectorAll(".candle");
  const alreadyBlown = [...candles].every(candle =>
    candle.classList.contains("off")
  );

  if (alreadyBlown) {
    wishMessage.textContent = "Your wish is on its way! ❤️";
    return;
  }

  candles.forEach((candle, index) => {
    setTimeout(() => {
      candle.classList.add("off");
    }, index * 100);
  });

  wishMessage.textContent =
    "🎉 HAPPY BIRTHDAY SAAD! May all your wishes come true! ❤️";

  launchConfetti(120);
});

// CELEBRATE AGAIN
document.getElementById("celebrateAgain").addEventListener("click", () => {
  launchConfetti(150);
  startBalloons();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
