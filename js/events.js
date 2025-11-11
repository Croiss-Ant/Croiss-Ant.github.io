/* ---------- CONFIG ---------- */
/* ---- popup elements ---- */
const wrapper = document.getElementById("wrapper")
const popup = document.getElementById("popup")
const popupImg = document.getElementById("popupImg")
const popupTitle = document.getElementById("popupTitle")
const popupText = document.getElementById("popupText")

/* ---- easter egg elements ---- */
const bug = document.getElementById("bug")
const audio = document.getElementById("audio")
const video = document.getElementById("video")

/* ---- test elements ---- */
const test = document.getElementById("test")

/* ---------- FUNCTIONS ---------- */
/* ---- popup rewriter ---- */
function popUp(header, text, image = null) {
    popupImg.innerHTML = ""
    popupTitle.innerHTML = `<div>${header}</div>`
    popupText.innerHTML = `<div>${text}</div>`
    if (image) {
        popupImg.innerHTML = `<img class="img" src="${image}"></img>`
        video.classList.add("inactive")
    }
    wrapper.classList.add("inactive")
    popup.classList.remove("inactive")
}

/* ---- plays easter egg ---- */
function playBug() {
    audio.play()
    video.play()
}

/* ---------- EVENTS ---------- */
/* ---- easter egg click event ---- */
bug.addEventListener("click", () => {
    if (popup.classList.contains("inactive")) {
        video.classList.remove("inactive")
        popUp("Get stick bugged lol", "You found a secret, I guess ?");
        playBug();
    }
})

/* ---- easter egg end event ---- */
audio.addEventListener("ended", () => {
    wrapper.classList.remove("inactive")
    popup.classList.add("inactive")
})

/* ---- close popup event ---- */
popup.addEventListener("click", () => {
    if (audio.paused) {
        wrapper.classList.remove("inactive")
        popup.classList.add("inactive")
    }
})

/* ---- test popup event ---- */
test.addEventListener("click", () => {
    popUp("What have you done", "...", "./assets/test.jpg")
})