// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Tutup menu saat link diklik (untuk mobile)
const navLinks = document.querySelectorAll('#mobile-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Navbar Scroll Effect (Ganti opacity saat scroll)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-primary', 'shadow-2xl');
        nav.classList.remove('bg-primary/90');
    } else {
        nav.classList.add('bg-primary/90');
        nav.classList.remove('shadow-2xl');
    }
});

// Smooth Scroll (Opsional karena sudah pakai class scroll-smooth di HTML)
// Tapi ini berguna jika ingin menambahkan offset agar tidak tertutup navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navHeight = document.querySelector('nav').offsetHeight;
        
        window.scrollTo({
            top: target.offsetTop - navHeight,
            behavior: 'smooth'
        });
    });
});