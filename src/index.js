const SCROLL_DURATION = 500;

const darkModeBtn = document.querySelector("#dark-mode-container button");
const body = document.querySelector("body");

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Responsive menu click listener
const responsiveMenus = document.querySelectorAll(".mobile-menu-cta");
for(const responsiveMenu of responsiveMenus) {
    responsiveMenu.addEventListener("click", () => {
        document.querySelector("body").classList.toggle("show-responsive-menu");
    });
}

// Home tab click listener
const homeTabs = document.querySelectorAll(".home-tab");
for(const homeTab of homeTabs) {
    homeTab.addEventListener("click", () => {
        $('body').scrollTo('#portfolio-intro-content', SCROLL_DURATION);
        document.querySelector("body").classList.remove("show-responsive-menu");
    });
}

// Skills, portfolio, contact
// click listeners
const skillNavSpans = document.querySelectorAll(".navigation-skills");
const portfolioNavSpans = document.querySelectorAll(".navigation-portfolio");
const contactNavSpans = document.querySelectorAll(".navigation-contact");

for(const skillNav of skillNavSpans) {
    skillNav.addEventListener("click", () => {
        $('body').scrollTo('#dev-skills-container', SCROLL_DURATION, {
            offset: {
                top: -50
            }
        });
        document.querySelector("body").classList.remove("show-responsive-menu");
    });
}

for(const portNav of portfolioNavSpans) {
    portNav.addEventListener("click", () => {
        $('body').scrollTo('#portfolio-container', SCROLL_DURATION, {
            offset: {
                top: -50
            }
        });
        document.querySelector("body").classList.remove("show-responsive-menu");
    });
}

for(const contactNav of contactNavSpans) {
    contactNav.addEventListener("click", () => {
        $('body').scrollTo('#contact-container', SCROLL_DURATION, {
            offset: {
                top: -50
            }
        });
        document.querySelector("body").classList.remove("show-responsive-menu");
    });
}