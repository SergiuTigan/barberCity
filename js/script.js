const banner = document.querySelector('.banner');
const nav = document.querySelector('header');
const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

const obs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        nav.classList.toggle("bla");
    });
}, options);

obs.observe(banner);