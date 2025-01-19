// Menambahkan efek animasi saat di-scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 150) {
            element.classList.add('fade-in-visible');
        }
    });
});

// Modal functionality
const modal = document.getElementById('myModal');
const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');

// Membuka modal
openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Menutup modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Menutup modal jika klik di luar modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});