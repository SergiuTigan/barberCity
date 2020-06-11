//navbar animation smooth
const content = document.querySelector('.content');
const nav = document.querySelector('header');
const options = {
    root: null,
    threshold: 0,
    rootMargin: "-300px"
};

const obs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        nav.style.transition = '0.3s';
        nav.classList.toggle("bla");
    });
}, options);

obs.observe(content);
