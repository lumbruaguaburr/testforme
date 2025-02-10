document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const mainContent = document.getElementById('main-content');

    function toggleMenu() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('shifted');
    }

    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
});