// Toggle Sidebar Function
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Event Listeners for Menu Toggle and Close Button
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');

    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
});