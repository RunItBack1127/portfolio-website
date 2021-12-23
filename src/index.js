const SCROLL_DURATION = 500;

const darkModeBtn = document.querySelector("#dark-mode-container button");
const body = document.querySelector("body");

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

// Skills, portfolio, contact
// click listeners
const skillNavSpans = document.querySelectorAll(".navigation-skills");
const portfolioNavSpans = document.querySelectorAll(".navigation-portfolio");
const contactNavSpans = document.querySelectorAll(".navigation-contact");

for(const skillNav of skillNavSpans) {
    skillNav.addEventListener("click", () => {
        $('body').scrollTo('#skills-container', SCROLL_DURATION);
    });
}

for(const portNav of portfolioNavSpans) {
    portNav.addEventListener("click", () => {
        $('body').scrollTo('#portfolio-container', SCROLL_DURATION);
    });
}

for(const contactNav of contactNavSpans) {
    contactNav.addEventListener("click", () => {
        $('body').scrollTo('#contact-container', SCROLL_DURATION);
    });
}

// Forms
const formInputs = [...document.querySelectorAll(".form-field-container input"),
    document.querySelector("#site-contact-form #message-container textarea")];
for(const formInput of formInputs) {
    formInput.addEventListener("input", () => {
        if(formInput.value !== "") {
            formInput.classList.add("has-content");
        }
        else {
            formInput.classList.remove("has-content");
        }
    });
}

function clearFormInputs() {
    for(const formInput of formInputs) {
        formInput.value = "";
        formInput.classList.remove("has-content");
    }
}

const clearBtn = document.querySelector("#site-contact-form #send-clear-container #clear-btn");
clearBtn.addEventListener("click", (event) => {
    event.preventDefault();
    clearFormInputs();
});

window.addEventListener("DOMContentLoaded", () => {
    clearFormInputs();
});