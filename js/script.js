const responsiveBtn = document.querySelector('.responsive-btn');
let closeBtn = document.querySelector('.close-btn');
let responsiveNav = document.querySelector('.nav__ul');

let navLinks = $('.navigation-link')

responsiveBtn.addEventListener('click', (ev) => {
    responsiveNav.classList.add('scroll-down');
    ev.preventDefault();
});

closeBtn.addEventListener('click', (ev) => {
    responsiveNav.classList.remove('scroll-down');
    ev.preventDefault();
});

navLinks.on('click', function(ev) {
    $('html,body').animate({ scrollTop: $(this.hash).offset().top},1000);
    responsiveNav.classList.remove('scroll-down');
    ev.preventDefault();
});