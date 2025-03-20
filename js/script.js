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

// Fungsi untuk mengirim pesan ke WhatsApp
function sendMessage(event) {
  event.preventDefault(); // Mencegah reload halaman

  // Ambil data dari input
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Nomor WhatsApp tujuan
  let phoneNumber = "6282239121669"; // Ganti dengan nomor WhatsApp Anda

  // Format pesan
  let whatsappMessage = `Halo, saya ${name}%0AEmail: ${email}%0APesan: ${message}`;

  // Buat link WhatsApp
  let whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  // Buka WhatsApp
  window.open(whatsappURL, "_blank");
}
