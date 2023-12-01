'use strict';

//get page to diplay passed from main.js
function getDisplayPage(itemId) {
    const pageToDisplay = sessionStorage.getItem("pageToDisplay");
    document.getElementById(itemId).setAttribute("src", pageToDisplay);
    console.log("The loaded page is: " + pageToDisplay);
}

document.onload = getDisplayPage('project-frame');