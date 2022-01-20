const KEYBOARD_ANIMATION_INTERVAL = 100;

const keys = document.querySelectorAll("#keyboard-graphic-container #keyboard-container svg g g path:not(#keyboard-panel)");

function randomizeKeyboard() {
    const litKey = document.querySelector(".lit-key");
    if(litKey != null) {
        litKey.classList.remove("lit-key");
    }
    chooseRandomKey();
    setTimeout(randomizeKeyboard, KEYBOARD_ANIMATION_INTERVAL);

    function chooseRandomKey() {
        const randIdx = Math.floor(Math.random() * keys.length);
        const randKey = keys[randIdx];
        randKey.classList.add("lit-key");
    }
}
randomizeKeyboard();