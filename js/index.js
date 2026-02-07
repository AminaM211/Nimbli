const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');

toggle.addEventListener('click', () => {
const isOpen = menu.classList.toggle('active');
toggle.setAttribute('aria-expanded', isOpen);
toggle.textContent = isOpen ? '✕' : '☰';
});

// klik buiten menu = sluiten
document.addEventListener('click', (e) => {
if (!menu.contains(e.target) && !toggle.contains(e.target)) {
 menu.classList.remove('active');
 toggle.setAttribute('aria-expanded', 'false');
 toggle.textContent = '☰';
}
});
