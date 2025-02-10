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

    // Removed code related to header video

    // Chart.js Implementation
    const ctx = document.getElementById('creatorsChart').getContext('2d');

    const creatorsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['MrBeast', 'Dhar Mann', 'Matt Rife', 'Rhett & Link', 'Alex Cooper'],
            datasets: [{
                label: 'Earnings ($ Millions)',
                data: [85, 45, 50, 30, 25],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                ],
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#c9d1d9'
                    },
                    grid: {
                        color: '#161b22'
                    }
                },
                x: {
                    ticks: {
                        color: '#c9d1d9'
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#c9d1d9'
                    }
                }
            }
        }
    });

    // Prevent Right-Click on Images Only
    const images = document.querySelectorAll('img');

    images.forEach((img) => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    });
});