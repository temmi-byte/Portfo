const images = document.querySelectorAll('.gallery-item img');
const popupViewer = document.getElementById('popup-viewer');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const zoomIn = document.getElementById('zoom-in');
const zoomOut = document.getElementById('zoom-out');

let currentIndex = 0;
let zoomLevel = 1;

function openPopup(index) {
  currentIndex = index;
  popupImg.src = images[currentIndex].src;
  popupViewer.classList.remove('hidden');
  zoomLevel = 1;
  popupImg.style.transform = `scale(${zoomLevel})`;
}

images.forEach((img, i) => {
  img.addEventListener('click', () => openPopup(i));
});

closeBtn.addEventListener('click', () => {
  popupViewer.classList.add('hidden');
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  popupImg.src = images[currentIndex].src;
  zoomLevel = 1;
  popupImg.style.transform = `scale(${zoomLevel})`;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  popupImg.src = images[currentIndex].src;
  zoomLevel = 1;
  popupImg.style.transform = `scale(${zoomLevel})`;
});

zoomIn.addEventListener('click', () => {
  zoomLevel += 0.1;
  popupImg.style.transform = `scale(${zoomLevel})`;
});

zoomOut.addEventListener('click', () => {
  zoomLevel = Math.max(0.5, zoomLevel - 0.1);
  popupImg.style.transform = `scale(${zoomLevel})`;
});

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