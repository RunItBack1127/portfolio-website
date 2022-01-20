// Forms
const FORMSPREE_POST_URL = "https://formspree.io/f/xwkypeke";
const FORM_SUCCESS_RESPONSE = 200;
const EMAIL_PROCESSING_ERR_RESPONSE = 422;

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

function RETRIEVE_FORM_DATA() {
    const formData = {
        "_name": formInputs[0].value,
        "_replyto": formInputs[1].value,
        "_subject": formInputs[2].value,
        "_message": formInputs[3].value
    };
    return JSON.stringify(formData);
}

const sendBtn = document.querySelector("#site-contact-form #send-clear-container #send-btn");
sendBtn.addEventListener("click", (event) => {
    event.preventDefault();

    (async() => {
        await fetch(FORMSPREE_POST_URL, {
            method: 'POST',
            body: RETRIEVE_FORM_DATA(),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            switch(response.status) {
                case FORM_SUCESS_RESPONSE:
                    // clearFormInputs();
                    break;
                case EMAIL_PROCESSING_ERR_RESPONSE:
                    // Email error
                    // clearFormInputs();
                    break;
                default:
                    break;
            }
        });
    })();
});

window.addEventListener("DOMContentLoaded", () => {
    clearFormInputs();
});