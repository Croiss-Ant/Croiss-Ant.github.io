const wrapper = document.getElementById("wrapper")
const popup = document.getElementById("popup")
const popupImg = document.getElementById("popupImg")
const popupTitle = document.getElementById("popupTitle")
const popupText = document.getElementById("popupText")

const bug = document.getElementById("bug")
const audio = document.getElementById("audio")
const video = document.getElementById("video")

function popUp(header, text, image = null, link = null) {
    popupTitle.innerHTML = `<div>${header}</div>`
    popupText.innerHTML = `<div>${text}</div>`
    if (image) {
        popupImg.innerHTML = `<img class="img" src="${image}"></img>`
    }
    wrapper.classList.add("inactive")
    popup.classList.remove("inactive")
}

function playBug() {
    audio.play()
    video.play()
}

bug.addEventListener("click", () => {
    if (popup.classList.contains("inactive")) {
        popUp("Get stick bugged lol", "You found a secret, I guess ?");
        playBug();
    }
})

popup.addEventListener("click", () => {
    if (audio.paused) {
        wrapper.classList.remove("inactive")
        popup.classList.add("inactive")
    }
})

audio.addEventListener("ended", () => {
    wrapper.classList.remove("inactive")
    popup.classList.add("inactive")
})