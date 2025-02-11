document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const video = document.getElementById('header-video');
    const videoPlaceholder = document.getElementById('video-placeholder');
    const playPauseIcon = playPauseBtn.querySelector('i');
    const faders = document.querySelectorAll('.fade-in');
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

    // Ensure elements exist
    if (!playPauseBtn || !video || !videoPlaceholder || !playPauseIcon) {
        console.error('One or more elements not found:', {
            playPauseBtn,
            video,
            videoPlaceholder,
            playPauseIcon
        });
        return;
    }

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
            videoPlaceholder.style.display = 'none';
            playPauseIcon.classList.remove('fa-play');
            playPauseIcon.classList.add('fa-pause');
            playPauseBtn.setAttribute('aria-label', 'Pause Video');
            playPauseBtn.setAttribute('aria-pressed', 'true');
        } else {
            video.pause();
            videoPlaceholder.style.display = 'block';
            playPauseIcon.classList.remove('fa-pause');
            playPauseIcon.classList.add('fa-play');
            playPauseBtn.setAttribute('aria-label', 'Play Video');
            playPauseBtn.setAttribute('aria-pressed', 'false');
        }
    }

    playPauseBtn.addEventListener('click', toggleVideo);


    // Fade-in Animation on Scroll
    if ('IntersectionObserver' in window) {
        const appearOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const appearOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        faders.forEach(fader => {
            fader.classList.add('visible');
        });
    }

    // Testimonials Slider
    function showSlides() {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        slides[slideIndex].style.display = 'block';
        slideIndex++;
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }

    if (slides.length > 0) {
        showSlides();
    }

    // Prevent Right-Click on Images Only
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });
});
