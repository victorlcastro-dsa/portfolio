document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typed-text', {
        strings: ['Solucionando problemas com inovação e criatividade'],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true
    });
});