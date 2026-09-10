// ===== Image Slider Logic =====
let slideIndex = 0;
showSlide(slideIndex);

// Fungsi untuk menampilkan slide sesuai index
function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}

// Fungsi tombol Next & Prev
function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Auto play setiap 4 detik
setInterval(() => {
  nextSlide();
}, 4000);