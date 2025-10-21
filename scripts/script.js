const images = document.querySelectorAll('.fact-image img');
const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

if (!mobileMediaQuery.matches) {
  images.forEach((img) => {
    img.addEventListener('mouseenter', function() {
        img.style.transition = 'transform 0.3s'
        img.style.transform = 'scale(1.15)';
    });
    img.addEventListener('mouseleave', function(){
        img.style.transform = 'scale(1)';
    });
});
}


function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-menu a');
  const navMenu = document.getElementById('navMenu');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });
  
  document.addEventListener('click', function(event) {
    const hamburger = document.querySelector('.hamburger');
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});