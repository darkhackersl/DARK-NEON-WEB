// Toggle Dark/Light Mode

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    themeToggle.textContent = 'Switch to Dark Mode';
  } else {
    themeToggle.textContent = 'Switch to Light Mode';
  }
});
