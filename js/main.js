import { linksMain, linksOnline, linksPro, bioMain, bioPro } from "./data.js";

let links = ""

const currentUrl = new URL(window.location)
const display = currentUrl.searchParams.get("q")

let profileDiv = document.getElementById("profile")
let nameDiv = document.getElementById("name")
let aboutDiv = document.getElementById("about")

let favicon = document.querySelector(`link[rel~="icon"]`)

function writeDiv(image, name, about, artistId = null, artLink = null) {
    nameDiv.innerHTML = `<div>${name}</div>`
    aboutDiv.innerHTML = `<div>${about}</div>`
    if (artistId) {
        profileDiv.innerHTML = `<a href="${artLink}" target="blank" title="Original art by ${artistId} | Click to check them out !"><img class="thumbnail" src="${image}" alt="thumbnail"></a>`
    } else {
        profileDiv.innerHTML = `<img class="thumbnail" src="${image}" alt="thumbnail">`
    }
}

if (display == "pro") {
    writeDiv(bioPro.image, bioPro.name, bioPro.about)
    links = linksMain.concat(linksPro)
    document.title = `${bioPro.name} | Liens utiles`
    favicon.href = bioPro.image

} else {
    writeDiv(bioMain.image, bioMain.name, bioMain.about, bioMain.artistId, bioMain.artLink)
    links = linksMain.concat(linksOnline)
    document.title = `${bioMain.name} | Links`
    favicon.href = bioMain.image
}

const linksDiv = document.getElementById("links")

function addLink(id, name, link, icon) {
    return `
    <a href="${link}" class="link ${id}" target="blank">
        <i class="${icon}"></i>
        <span>${name} </span>
        <i class="${icon}"></i>
    </a>`
}

let addLinks = ""

links.forEach((l) => {
    let id = l.id
    let link = l.link
    let name = l.name
    let icon = l.icon

    addLinks += addLink(id, name, link, icon)
})

linksDiv.innerHTML = addLinks