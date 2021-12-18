const darkModeBtn = document.querySelector("#dark-mode-container button");
const body = document.querySelector("body");

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

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

document.querySelector("#site-contact-form #send-clear-container #clear-btn").addEventListener("click", (event) => {
    event.preventDefault();
    clearFormInputs();
});