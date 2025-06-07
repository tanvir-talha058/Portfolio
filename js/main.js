document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.display = 'none';
    }
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        const scrollBtn = document.getElementById('scroll-top');
        if (window.scrollY > 500) {
            scrollBtn.classList.remove('hidden');
        } else {
            scrollBtn.classList.add('hidden');
        }
    });
});