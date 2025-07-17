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



function AnimationSlideInLeft(selector, animationClass = 'slideLeft', threshold = 0.5) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observerInstance.unobserve(entry.target);
      }
    });
  }, { threshold });
  elements.forEach(el => observer.observe(el));
}


AnimationSlideInLeft('#project');
