const bug = document.getElementById("bug")

bug.addEventListener("click", () => {
    playBug()
})

function playBug() {
    let audio = document.getElementById("audio")
    audio.play()
}