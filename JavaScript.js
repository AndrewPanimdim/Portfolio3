let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    const topnav = document.querySelector('.topnav');
    if (!topnav) return;

    if (window.scrollY > lastScrollY) {

        topnav.style.top = '-9%';
    } else {

        topnav.style.top = '0%';
    }
    lastScrollY = window.scrollY;
});

