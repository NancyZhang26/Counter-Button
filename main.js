"use strict";

var clicks = 0;
function add() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}

function sub() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
}