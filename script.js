// script.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    
    // Periksa preferensi tema yang disimpan atau gunakan preferensi sistem
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    html.setAttribute('data-theme', savedTheme);
    
    // Perbarui ikon berdasarkan tema saat ini
    updateIcon(savedTheme);
    
    // Toggle tema saat tombol diklik
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Perbarui tema
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Perbarui ikon
        updateIcon(newTheme);
    });
    
    // Dengarkan perubahan tema sistem
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) { // Hanya jika pengguna belum menyetel preferensi
            const newTheme = e.matches ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            updateIcon(newTheme);
        }
    });
    
    function updateIcon(theme) {
        const moonIcon = document.querySelector('.fa-moon');
        const sunIcon = document.querySelector('.fa-sun');
        
        if (theme === 'dark') {
            moonIcon.style.opacity = '1';
            moonIcon.style.transform = 'rotate(0)';
            sunIcon.style.opacity = '0';
            sunIcon.style.transform = 'rotate(-90deg)';
        } else {
            moonIcon.style.opacity = '0';
            moonIcon.style.transform = 'rotate(90deg)';
            sunIcon.style.opacity = '1';
            sunIcon.style.transform = 'rotate(0)';
        }
    }
});
