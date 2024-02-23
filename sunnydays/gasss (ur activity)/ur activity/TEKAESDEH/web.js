// Responsive navbar
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const listIcon = document.querySelector('.list');
  
    listIcon.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
  });