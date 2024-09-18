const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
const mobileMenuContent = document.getElementById('mobile-menu-content');
const servicesMenuBtn = document.getElementById('services-menu-btn');
const projectsMenuBtn = document.getElementById('projects-menu-btn');
const servicesSubmenu = document.getElementById('services-submenu');
const projectsSubmenu = document.getElementById('projects-submenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuOverlay.classList.remove('hidden');
    setTimeout(() => mobileMenuContent.classList.add('open'), 0);
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenuContent.classList.remove('open');
    setTimeout(() => mobileMenuOverlay.classList.add('hidden'), 300);
});

servicesMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    servicesSubmenu.classList.toggle('open');
    servicesMenuBtn.querySelector('svg').classList.toggle('rotate-180');
});

projectsMenuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    projectsSubmenu.classList.toggle('open');
    projectsMenuBtn.querySelector('svg').classList.toggle('rotate-180');
});