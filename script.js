document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('image-container');
    const images = [
        'https://pngimg.com/uploads/vitamins/vitamins_PNG39.png',
        'https://cdn-icons-png.flaticon.com/512/3475/3475286.png',
        'https://static.vecteezy.com/system/resources/previews/021/476/606/original/smiling-woman-with-tape-on-waist-png.png',
        'https://static.vecteezy.com/system/resources/previews/012/005/168/original/silhouette-running-man-runner-male-runner-sublimation-design-silhouette-watercolors-marathon-running-men-digital-downloads-png.png',
        'https://static.vecteezy.com/system/resources/previews/013/261/186/original/girl-doing-yoga-and-meditating-yoga-love-freedom-happiness-health-free-png.png'
    ];

    images.forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Beautiful Place';
        img.classList.add('image');
        imageContainer.appendChild(img);
    });

    const themeToggle = document.getElementById('theme-toggle');
    const themeText = document.getElementById('theme-text');
    const body = document.body;
    const currentTheme = localStorage.getItem('theme') || 'light';

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeText.textContent = 'Light Mode';
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            themeText.textContent = 'Light Mode';
            themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        } else {
            themeText.textContent = 'Dark Mode';
            themeToggle.querySelector('i').classList.replace('fa-sun', 'fa-moon');
        }
    });

    const searchForm = document.getElementById('searchForm');
    const countryInput = document.getElementById('countryInput');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = countryInput.value;
        if (query) {
            window.location.href = `https://www.google.com/search?q=${query}`;
        }
    });
});











