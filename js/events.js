const wrapper = document.getElementById("wrapper")
const popup = document.getElementById("popup")
const bug = document.getElementById("bug")
const audio = document.getElementById("audio")

function popUp(header, text, image) {
    wrapper.classList.add("inactive")
    popup.classList.remove("inactive")
}

function playBug() {
    audio.play()
}

bug.addEventListener("click", () => {
    if (popup.classList.contains("inactive")) {
        popUp();
        playBug();
    }
})

audio.addEventListener("ended", () => {
    wrapper.classList.remove("inactive")
    popup.classList.add("inactive")
})