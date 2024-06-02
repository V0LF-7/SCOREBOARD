let homescore = 0
let guestscore = 0
let hs = document.getElementById("homecount")
let gs = document.getElementById("guestcount")


function hsOne() {
    homescore +=1
    hs.textContent = homescore
}
function hsTwo() {
    homescore +=2
    hs.textContent = homescore
}
function hsThree() {
    homescore +=3
    hs.textContent = homescore
}

function gsOne() {
    guestscore +=1
    gs.textContent = guestscore
}
function gsTwo() {
    guestscore +=2
    gs.textContent = guestscore
}
function gsThree() {
    guestscore +=3
    gs.textContent = guestscore
}