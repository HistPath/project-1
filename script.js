/* =========================
   HAMBURGER MENU
========================= */

// Mengambil elemen
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Event ketika tombol hamburger diklik
hamburger.addEventListener("click", () => {

  // Toggle menu mobile
  navMenu.classList.toggle("active");

});

/* =========================
   TUTUP MENU SAAT KLIK DI LUAR
========================= */

document.addEventListener("click", (e) => {

  // Jika klik bukan hamburger/menu
  if (
    !hamburger.contains(e.target) &&
    !navMenu.contains(e.target)
  ) {

    navMenu.classList.remove("active");

  }

});

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    e.preventDefault();

    // Mengambil target section
    const targetId = this.getAttribute("href");

    const targetSection =
      document.querySelector(targetId);

    // Scroll halus
    targetSection.scrollIntoView({
      behavior: "smooth"
    });

    // Tutup menu mobile setelah klik
    navMenu.classList.remove("active");

  });

});

/* =========================
   ANIMASI SCROLL
========================= */

// Mengambil semua element reveal
const reveals =
  document.querySelectorAll(".reveal");

// Fungsi animasi scroll
function showOnScroll() {

  reveals.forEach((item) => {

    const windowHeight =
      window.innerHeight;

    const elementTop =
      item.getBoundingClientRect().top;

    // Jika element masuk layar
    if (elementTop < windowHeight - 100) {

      item.classList.add("active");

    }

  });

}

// Jalankan saat scroll
window.addEventListener(
  "scroll",
  showOnScroll
);

// Jalankan saat halaman dibuka
showOnScroll();

/* =========================
   ACTIVE NAVBAR LINK
========================= */

// Mengambil semua section
const sections =
  document.querySelectorAll("section");

// Mengambil semua link navbar
const navLinks =
  document.querySelectorAll(".nav-menu a");

// Event scroll
window.addEventListener("scroll", () => {

  let current = "";

  // Mengecek section aktif
  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.clientHeight;

    // Jika posisi scroll sesuai section
    if (
      pageYOffset >= sectionTop &&
      pageYOffset <
      sectionTop + sectionHeight
    ) {

      current = section.getAttribute("id");

    }

  });

  // Mengubah link aktif
  navLinks.forEach((link) => {

    link.classList.remove("active-link");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {

      link.classList.add("active-link");

    }

  });

});

/* =========================
   NAVBAR EFFECT SAAT SCROLL
========================= */

const navbar =
  document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  // Jika discroll
  if (window.scrollY > 50) {

    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.1)";

  }

  else {

    navbar.style.boxShadow =
      "var(--shadow)";

  }

});

/* =========================
   FALLBACK GAMBAR
========================= */

// Mengambil semua gambar
const images =
  document.querySelectorAll("img");

// Loop semua gambar
images.forEach((img) => {

  // Jika gambar gagal dimuat
  img.addEventListener("error", () => {

    // Placeholder fallback
    img.src =
      "https://via.placeholder.com/600x400?text=Gambar+Belum+Ditambahkan";

    // Background fallback
    img.style.background =
      "#d1d5db";

    img.style.padding =
      "20px";

  });

});

/* =========================
   EFEK HOVER CARD MOBILE
========================= */

// Mengambil semua card
const cards =
  document.querySelectorAll(
    ".card, .feature-card, .team-card"
  );

// Efek interaktif sederhana
cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform =
      "translateY(-8px)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform =
      "translateY(0)";

  });

});