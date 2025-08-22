const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');

function openMenu() {
  mobileNav.classList.add('active');
  overlay.classList.add('active');
}

function closeMenu() {
  mobileNav.classList.remove('active');
  overlay.classList.remove('active');
}

