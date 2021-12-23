const scrollMenu = document.querySelector("#site-navigation-menu-scroll");

window.addEventListener("scroll", () => {
    if(window.scrollY >= 200) {
        scrollMenu.classList.add("show-scroll-menu");
    }
    else {
        scrollMenu.classList.remove("show-scroll-menu");
    }
});