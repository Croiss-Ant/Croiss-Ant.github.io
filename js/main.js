import { linksMain, linksOnline, linksPro } from "./links.js";

const linkDiv = document.getElementById("links")

function addLink(name, link, image, color) {
    if (!color) {
        return `
        <a href="${link}" class="link ${name.split(" ")[0].toLowerCase()}" target="blank">
            <i class="${image}"></i>
            <span>${name} </span>
            <i class="fa-solid fa-paperclip" onclick="copyLink(${link})"></i>
        </a>`
    } else {
        return `
        <a href="${link}" class="link ${name.toLowerCase()}" target="blank">
            <i class="${image}" style="color: ${color};"></i>
            <span>${name} </span>
        </a>`
    }
}

function copyLink(link) {
    navigator.clipboard.writeText(link)
}

let addLinks = ""
let links = linksMain.concat(linksOnline)

links.forEach((l) => {
    let link = l.link
    let name = l.name
    let image = l.image
    let color = l.color

    addLinks += addLink(name, link, image, color)
})

linkDiv.innerHTML = addLinks