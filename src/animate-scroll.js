const PAGE_LOAD_DEFAULT_WAIT_TIME = 50;
const BUFFER_SCROLL_HEIGHT = 250;

// Animate the portfolio intro content
const pic = document.querySelector('#portfolio-intro-content');
const snm = document.querySelector("#site-navigation-menu");

setTimeout(() => {
    pic.classList.add("show-content");
    snm.classList.add("show-content");
}, PAGE_LOAD_DEFAULT_WAIT_TIME);

// Animate sections load on scroll
const siteContentContainers = document.querySelectorAll('.site-content-container');

window.addEventListener("scroll", () => {
    const bodyRect = document.querySelector('body').getBoundingClientRect();
    for(const scc of siteContentContainers) {
        if(window.scrollY + window.innerHeight - BUFFER_SCROLL_HEIGHT >=
            scc.getBoundingClientRect().top - bodyRect.top) {
            scc.classList.add("show-content");
        }
    }
})