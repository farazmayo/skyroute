function navigateToHome() {
    window.location.href = '../index.html';
}

function navigateToAbout() {
    window.location.href = '../About/about.html';
}

function navigateToBlogs() {
    window.location.href = '../Blogs/blogs.html';
}

function navigateToContact() {
    window.location.href = '../Pages/contactus.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('footer-home');

    // Scroll to top function
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Toggle button visibility on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Toggle sidebar visibility
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');

    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            sidebar.classList.add('active');
        } else {
            sidebar.classList.remove('active');
        }
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        menuToggle.checked = false;
    });
});