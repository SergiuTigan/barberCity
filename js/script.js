//navbar animation smooth
const content = document.querySelector('.content');
const nav = document.querySelector('header');
const menuItems = document.querySelectorAll('.hoverC');
const toggler = document.querySelector('.toggler');
const clocks = document.querySelectorAll('.fa-clock-o');
const options = {
    root: null,
    threshold: 0,
    rootMargin: "-300px"
};

const obs = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        nav.style.transition = '0.3s';
        nav.classList.toggle("fixed");
    });
}, options);

obs.observe(content);

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
        toggler.checked = false;
    })
}

function removeClocks(small) {
    if (small.matches) {
        for (let i = 0; i < clocks.length; i++) {
            clocks[i].style.display = "none";
        }
    }
}

let small = window.matchMedia("(max-width:1199px)");
removeClocks(small);
small.addListener(removeClocks);