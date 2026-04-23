// Menambahkan efek sederhana saat halaman di-scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#0d124a'; // Warna lebih gelap saat scroll
        nav.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
    } else {
        nav.style.backgroundColor = '#1a237e'; // Warna asli
        nav.style.boxShadow = 'none';
    }
});

// Pesan sambutan di konsol browser
console.log("Selamat datang di Portofolio Laila Nurul Hidayah!");