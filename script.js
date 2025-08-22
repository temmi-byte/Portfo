const darkModeToggle = document.querySelector('.dark-mode-toggle');
const darkModeStyle = document.getElementById('darkModeStyle');

// Show/hide back-to-top button
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function () {
  const btn = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');

  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });
});



// Set initial theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}
// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeStyle.removeAttribute('disabled');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeStyle.setAttribute('disabled', 'true');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeStyle.removeAttribute('disabled');
}

// Update menu icon color when dark mode is toggled
function updateMenuIconColor() {
    const menuToggles = document.querySelectorAll('.menu-toggle span');
    if (document.body.classList.contains('dark-mode')) {
        menuToggles.forEach(span => {
            span.style.backgroundColor = '#D4AF37'; // Gold
        });
    } else {
        menuToggles.forEach(span => {
            span.style.backgroundColor = '#000000'; // Black
        });
    }
}

  document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
      const percent = bar.getAttribute('data-progress') + '%';
      bar.style.setProperty('--progress', percent);
    });
  });


  const counters = document.querySelectorAll('.counter');
  const options = {
    root: null,
    threshold: 0.5
  };

  const animateCounter = (entry) => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const update = () => {
      const increment = target / 40; // animation speed
      if (count < target) {
        count += increment;
        counter.textContent = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };

    update();
    observer.unobserve(counter); // only animate once
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(animateCounter);
  }, options);

  counters.forEach(counter => observer.observe(counter));

  const cards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.remove('active');
      if (i === index) card.classList.add('active');
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  });

  // Auto-slide (optional)
  // setInterval(() => {
  //   nextBtn.click();
  // }, 7000);
