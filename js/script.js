// Toggle kelas aktif untuk navbar
const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('#hamburger-menu');

// Saat hamburger diklik
hamburger.addEventListener('click', function (e) {
  e.preventDefault();
  navbarNav.classList.toggle('active');
});

// Klik di luar sidebar untuk menghilangkan menu
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
