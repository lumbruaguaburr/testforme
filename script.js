document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const video = document.getElementById('header-video');
    const placeholder = document.getElementById('video-placeholder');
    const playPauseIcon = playPauseBtn.querySelector('i');

    // Sidebar Toggle Function
    function toggleMenu() {
        sidebar.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Play/Pause Video Function
    function toggleVideo() {
        if (video.paused) {
            video.play();
            placeholder.style.display = 'none';
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');
            playPauseBtn.setAttribute('aria-label', 'Pause Video');
        } else {
            video.pause();
            placeholder.style.display = 'block';
            playPauseIcon.classList.remove('fa-pause');
            playPauseIcon.classList.add('fa-play');
            playPauseBtn.setAttribute('aria-label', 'Play Video');
        }
    }

    playPauseBtn.addEventListener('click', toggleVideo);
});