import { linksMain, linksOnline, linksPro, bioMain, bioPro } from "./data.js";

/* ---------- CONFIG ---------- */
/* ---- link containers ---- */
let links = ""
let addLinks = ""

/* ---- http GET parameter ---- */
const currentUrl = new URL(window.location)
const display = currentUrl.searchParams.get("q")

/* -- html elements -- */
const favicon = document.querySelector(`link[rel~="icon"]`)
const profileDiv = document.getElementById("profile")
const nameDiv = document.getElementById("name")
const aboutDiv = document.getElementById("about")
const linksDiv = document.getElementById("links")

/* ---------- FUNCTIONS ---------- */
/* ---- rewrite bio elements ---- */
function writeDiv(image, name, about, artistId = null, artLink = null) {
    nameDiv.innerHTML = `<div>${name}</div>`
    aboutDiv.innerHTML = `<div>${about}</div>`
    if (artistId) {
        profileDiv.innerHTML = `<a href="${artLink}" target="blank" title="Original art by ${artistId} | Click to check them out !"><img class="thumbnail" src="${image}" alt="thumbnail"></a>`
    } else {
        profileDiv.innerHTML = `<img class="thumbnail" src="${image}" alt="thumbnail">`
    }
}

/* ---- add a new link element ---- */
function addLink(id, name, link, icon) {
    return `
    <a href="${link}" class="link ${id}" target="blank">
        <i class="${icon}"></i>
        <span>${name} </span>
        <i class="${icon}"></i>
    </a>`
}

/* ---------- MAIN ---------- */
/* ---- dynamically update page content ---- */
if (display == "pro") {
    document.title = `${bioPro.name} | Liens utiles`
    favicon.href = bioPro.image
    writeDiv(bioPro.image, bioPro.name, bioPro.about)
    links = linksMain.concat(linksPro)

} else {
    writeDiv(bioMain.image, bioMain.name, bioMain.about, bioMain.artistId, bioMain.artLink)
    links = linksMain.concat(linksOnline)
    document.title = `${bioMain.name} | Links`
    favicon.href = bioMain.image
}

/* ---- dynamically create all the necessary links.. ---- */
links.forEach((l) => {
    let id = l.id
    let link = l.link
    let name = l.name
    let icon = l.icon

    addLinks += addLink(id, name, link, icon)
})

/* ---- ..and inject them into the page ---- */
linksDiv.innerHTML = addLinks