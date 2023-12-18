'use strict';
import {
    generateNavbar,
    sleep,
    fadeOutLoadingScreen 
} from "./shared";

//get page to diplay passed from main.js
function getDisplayPage(itemId) {
    const pageToDisplay = sessionStorage.getItem("pageToDisplay");
    document.getElementById(itemId).setAttribute("src", pageToDisplay);
    // console.log("The loaded page is: " + pageToDisplay);
}

// document.onload = getDisplayPage('project-frame');
//Load all information at startup
window.onpageshow = ()=>loadStartInformation();

async function loadStartInformation(){
    await generateNavbar("projectdisplay","nav");
    getDisplayPage('project-frame');
    await sleep(100);
    fadeOutLoadingScreen(275);
}