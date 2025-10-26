import { linksMain, linksOnline, linksPro } from "./links.js";

// https://github.com/h-kuwayama/ghp-rewrite
/*
* Config
*/
let file_name = '';
let parameter_key = 'display';
    
/*
* Env
*/
let path_name = window.location.pathname;
let query_string = window.location.search;
let base_dir = path_name.split(file_name)[0];
    
/*
* Process
* (Rewrite URL using historyAPI)
*/
let parameter
let parameter_value
let match_condition = new RegExp(parameter_key + '=[a-z0-9-_]+$');
if (parameter = query_string.match(match_condition)) {
    parameter_value = parameter[0].split('=')[1];
    history.replaceState(null, null, base_dir + file_name.replace('.html', '/') + parameter_value);
}

let links = ""

//const currentUrl = new URL(window.location)
//const display = currentUrl.searchParams.get("display")

let profileDiv = document.getElementById("profile")
let nameDiv = document.getElementById("name")
let aboutDiv = document.getElementById("about")

function writeDiv(image, name, about) {
    profileDiv.innerHTML = `<img class="thumbnail" src="${image}" alt="thumbnail">`
    nameDiv.innerHTML = `<div>${name}</div>`
    aboutDiv.innerHTML = `<div>${about}</div>`
}

if (parameter_value == "pro") {
    writeDiv("https://image2url.com/images/1761484200064-2c3e6b91-e9d1-4630-b801-9e43cc4ca326.jpg", "Antoine Bellion", "")
    links = linksMain.concat(linksPro)

} else {
    writeDiv("https://image2url.com/images/1761484172085-be4b7a67-34c0-4c2c-8c2d-98f752a84bb0.png", "Ant", "")
    links = linksMain.concat(linksOnline)
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