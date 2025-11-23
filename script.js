
// Select all project images
const projectImages = document.querySelectorAll('.project-card img');

projectImages.forEach(img => {
  img.addEventListener('click', () => {
    // If image is already expanded, shrink it back
    if (img.classList.contains('expanded')) {
      img.classList.remove('expanded');
      document.body.classList.remove('image-expanded');
    } else {
      // Close any other expanded image
      document.querySelectorAll('.expanded').forEach(openImg => {
        openImg.classList.remove('expanded');
      });

      // Expand the clicked image
      img.classList.add('expanded');
      document.body.classList.add('image-expanded');
    }
  });
});

// Optional: allow clicking outside (Esc key) to close expanded image
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const expanded = document.querySelector('.expanded');
    if (expanded) {
      expanded.classList.remove('expanded');
      document.body.classList.remove('image-expanded');
    }
  }
});

// ===== Scroll Animations =====
const animatedElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  animatedElements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Back to Top Button =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

