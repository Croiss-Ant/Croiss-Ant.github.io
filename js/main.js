import { linksMain, linksOnline, linksPro } from "./links.js";

const linkDiv = document.getElementById("links")

function addLink(id, name, link, icon) {
    return `
    <a href="${link}" class="link ${id}" target="blank">
        <i class="${icon}"></i>
        <span>${name} </span>
        <i class="${icon}"></i>
    </a>`
}

let addLinks = ""
let links = linksMain.concat(linksOnline)

links.forEach((l) => {
    let id = l.id
    let link = l.link
    let name = l.name
    let icon = l.icon

    addLinks += addLink(id, name, link, icon)
})

linkDiv.innerHTML = addLinks