document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Functionality
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');

    function toggleMenu() {
        sidebar.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Search Functionality
    const searchBar = document.getElementById('search-bar');

    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        faqItems.forEach(item => {
            const questionText = item.querySelector('.faq-question span').textContent.toLowerCase();
            const answerText = item.querySelector('.faq-answer').textContent.toLowerCase();
            if (questionText.includes(searchTerm) || answerText.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Prevent Right-Click on Images
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });
});
