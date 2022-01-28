// Forms
const FORMSPREE_POST_URL = "https://formspree.io/f/xwkypeke";
const FORM_SUCCESS_RESPONSE = 200;
const EMAIL_PROCESSING_ERR_RESPONSE = 422;

const siteForm = document.querySelector("#site-contact-form");

const clearBtn = document.querySelector("#site-contact-form #send-clear-container #clear-btn");
const sendBtn = document.querySelector("#site-contact-form #send-clear-container #send-btn");

clearBtn.addEventListener("click", (event) => {
    event.preventDefault();
    clearFormInputs();
});

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

        // IF there is at least some text in one of
        // the fields, enable the clear button -
        // otherwise, disable both the clear and the
        // send buttons
        const textInFields = formInputs.some((formInput) => {
            return formInput.value !== "";
        });
        if(textInFields) {
            clearBtn.classList.remove("option-disable");
        }
        else {
            clearBtn.classList.add("option-disable");
            sendBtn.classList.add("option-disable");
        }

        const allFormsFilledOut = formInputs.every((formInput) => {
            return formInput.value !== "";
        });
        if(allFormsFilledOut) {
            sendBtn.classList.remove("option-disable");
        }
        else {
            sendBtn.classList.add("option-disable");
        }
    });

    formInput.addEventListener("change", () => {
        siteForm.classList.remove("invalid-email");
    });
}

function clearFormInputs() {
    for(const formInput of formInputs) {
        formInput.value = "";
        formInput.classList.remove("has-content");
    }
    clearBtn.classList.add("option-disable");
    sendBtn.classList.add("option-disable");
    siteForm.classList.remove("invalid-email");
}

function RETRIEVE_FORM_DATA() {
    const formData = {
        "_name": formInputs[0].value,
        "_replyto": formInputs[1].value,
        "_subject": formInputs[2].value,
        "_message": formInputs[3].value
    };
    return JSON.stringify(formData);
}

sendBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const body = document.querySelector("body");
    const cfsc = document.querySelector("#contact-form-submit-container");

    cfsc.classList.add("show-loading-spinner");
    body.classList.add("show-form-submit-container");

    (async() => {
        await fetch(FORMSPREE_POST_URL, {
            method: 'POST',
            body: RETRIEVE_FORM_DATA(),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            switch(response.status) {
                case FORM_SUCCESS_RESPONSE:
                    // clearFormInputs();
                    cfsc.classList.remove("show-loading-spinner");
                    break;
                case EMAIL_PROCESSING_ERR_RESPONSE:
                    // Email error
                    // clearFormInputs();
                    body.classList.remove("show-form-submit-container");
                    cfsc.classList.remove("show-loading-spinner");
                    siteForm.classList.add("invalid-email");
                    break;
                default:
                    break;
            }
        }).catch(err => {
            console.log(err);
        });
    })();
});

window.addEventListener("DOMContentLoaded", () => {
    clearFormInputs();
});

// Close listener for form success popup
const formSuccessCloseBtn = document.querySelector("#contact-form-submit-success #close-container button");
formSuccessCloseBtn.addEventListener("click", () => {
    document.querySelector("body").classList.remove("show-form-submit-container");
});