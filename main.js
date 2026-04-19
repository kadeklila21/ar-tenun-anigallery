document.addEventListener('DOMContentLoaded', function () {
    // Intersection Observer for scroll animations
    const sections = document.querySelectorAll('.animate__animated');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(entry.target.classList[1]);
                entry.target.style.visibility = 'visible';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    sections.forEach(section => {
        section.style.visibility = 'hidden';
        observer.observe(section);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar-custom');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(15, 15, 15, 0.98)';
                navbar.style.padding = '10px 0';
            } else {
                navbar.style.backgroundColor = 'rgba(15, 15, 15, 0.9)';
                navbar.style.padding = '15px 0';
            }
        });
    }
});
