'use strict';

//get page to diplay passed from main.js
function getDisplayPage(itemId) {
    const pageToDisplay = sessionStorage.getItem("pageToDisplay");
    document.getElementById(itemId).setAttribute("src", pageToDisplay);
}

document.onload = getDisplayPage('project-frame');