document.addEventListener('DOMContentLoaded', function() {
  const year = new Date().getFullYear();
  const y = document.getElementById('year'); if (y) y.textContent = year;
  const ya = document.getElementById('year-about'); if (ya) ya.textContent = year;
  const yc = document.getElementById('year-contact'); if (yc) yc.textContent = year;

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function() {
      setTimeout(() => alert('Your mail app should open now. If not, try using Formspree or Netlify Forms.'), 300);
    });
  }
});
