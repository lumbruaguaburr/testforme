document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');
    const unfollowButtons = document.querySelectorAll('.unfollow-btn');
    const searchBar = document.getElementById('search-bar');

    // Sidebar Toggle Function
    function toggleMenu() {
        sidebar.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Unfollow Button Functionality
    unfollowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const creatorId = button.getAttribute('data-creator-id');
            // Implement the unfollow functionality here
            // For now, we'll just display an alert
            alert(`You have unfollowed the creator with ID: ${creatorId}`);
            // Remove the creator card from the grid
            button.closest('.creator-card').remove();
        });
    });

    // Search Functionality
    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const creatorCards = document.querySelectorAll('.creator-card');

        creatorCards.forEach(card => {
            const creatorName = card.querySelector('.creator-info h3').textContent.toLowerCase();
            if (creatorName.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Play/Pause Video Functionality
    const playPauseBtn = document.querySelector('.play-pause-btn');
    const video = document.getElementById('header-video');
    const videoPlaceholder = document.getElementById('video-placeholder');
    const playPauseIcon = playPauseBtn.querySelector('i');

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
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Prevent Right-Click on Images Only
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });
});
