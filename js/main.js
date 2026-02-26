// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // COUNTDOWN TIMER
  // =========================
  const launchDate = new Date("2026-06-01T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (!daysEl) return; // safety check

    if (distance <= 0) {
      document.querySelector(".countdown").innerHTML =
        "<h2>Now Welcoming Our Royal Guests</h2>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // =========================
  // SCROLL FADE ANIMATION
  // =========================
  const faders = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
      });
    },
    { threshold: 0.3 }
  );

  faders.forEach((el) => observer.observe(el));
});