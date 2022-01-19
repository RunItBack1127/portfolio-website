const SCROLL_DURATION = 500;

const darkModeBtn = document.querySelector("#dark-mode-container button");
const body = document.querySelector("body");

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Home tab click listener
const homeTabs = document.querySelectorAll(".home-tab");
for(const homeTab of homeTabs) {
    homeTab.addEventListener("click", () => {
        $('body').scrollTo('#portfolio-intro-content', SCROLL_DURATION);
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
    });
}

for(const portNav of portfolioNavSpans) {
    portNav.addEventListener("click", () => {
        $('body').scrollTo('#portfolio-container', SCROLL_DURATION, {
            offset: {
                top: -50
            }
        });
    });
}

for(const contactNav of contactNavSpans) {
    contactNav.addEventListener("click", () => {
        $('body').scrollTo('#contact-container', SCROLL_DURATION, {
            offset: {
                top: -50
            }
        });
    });
}