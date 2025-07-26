// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const body = document.body;

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Fechar menu ao clicar fora
document.addEventListener('click', (event) => {
    if (menu.classList.contains('active') &&
        !menu.contains(event.target) &&
        !menuToggle.contains(event.target)) {
        menuToggle.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('menu-open');
    }
});

// Smooth scroll animation for navigation links
document.querySelectorAll('nav .menu a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth <= 900) {
            menuToggle.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});

// Smooth scroll animation for "Mais Sobre" button
document.querySelector('.btn[href="#mais"]').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#mais').scrollIntoView({ behavior: 'smooth' });
});





function openModal(title, previewImage, siteUrl) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('websitePreview').src = previewImage;
    document.getElementById('visitSite').href = siteUrl;
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});