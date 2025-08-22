function slide(button, direction) {
    const slider = button.parentElement;
    const images = slider.querySelectorAll('.slider-img');
    let currentIndex = [...images].findIndex(img => img.classList.contains('active'));
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');
  }

  function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
  }

  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
  }
  
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

