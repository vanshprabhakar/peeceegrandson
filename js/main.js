// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ================= ULTRA LUX COUNTDOWN =================

const openingDate = new Date("June 1, 2026 18:00:00").getTime();

function animateNumber(id, value) {
  const el = document.getElementById(id);
  if (!el) return;

  if (el.innerText !== value) {
    el.classList.add("animate");

    setTimeout(() => {
      el.innerText = value;
      el.classList.remove("animate");
    }, 300);
  }
}

setInterval(function () {

  const now = new Date().getTime();
  const distance = openingDate - now;

  if (distance < 0) {
    document.querySelector(".countdown").innerHTML =
      "<h3 style='color:#d4af37;'>We Are Now Open</h3>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2,"0");
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2,"0");
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2,"0");
  const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2,"0");

  animateNumber("days", days);
  animateNumber("hours", hours);
  animateNumber("minutes", minutes);
  animateNumber("seconds", seconds);

}, 1000);