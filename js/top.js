document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle Function
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    const closeBtn = document.querySelector('.close-btn');

    function toggleMenu() {
        sidebar.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Initialize Chart.js
    const ctx = document.getElementById('creatorsChart').getContext('2d');

    const creatorsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['MrBeast', 'Dhar Mann', 'Matt Rife', 'Rhett & Link', 'Alex Cooper'],
            datasets: [
                {
                    label: 'Followers (Millions)',
                    data: [503, 120, 50, 107, 12],
                    backgroundColor: 'rgba(59, 130, 246, 0.8)'
                },
                {
                    label: 'Earnings ($ Millions)',
                    data: [85, 45, 50, 30, 25],
                    backgroundColor: 'rgba(251, 191, 36, 0.8)'
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#f9fafb'
                    },
                    grid: {
                        color: '#1f2937'
                    }
                },
                x: {
                    ticks: {
                        color: '#f9fafb'
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#f9fafb'
                    }
                }
            }
        }
    });

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
