"use strict";
//Global Constants
const PROJECT_WINDOW_ID = ["project01", "project02", "project03"];

const feedbackWindow = document.getElementById("feedbackContainer");
const feedbackHeader = document.getElementById("feedbackHead");
const feedbackButton = document.getElementById("feedbackButton");
const cancelFeedbackBtn = document.getElementById("cancelFeedbackBtn");
const mainPageArea = document.getElementById("mainSection");
const feedbackForm = document.getElementById("feedbackForm");
const projectBubble = [document.getElementById(PROJECT_WINDOW_ID[0]), document.getElementById(PROJECT_WINDOW_ID[1]), document.getElementById(PROJECT_WINDOW_ID[2])];

//Global Variables
let urlList = "";
let lastExpandedWindowId = "";
let clickedABubble = false;

//add event listeners
feedbackButton.addEventListener("click", showFeedbackForm);
cancelFeedbackBtn.addEventListener("click", zoomOutFeedback);
mainPageArea.addEventListener("click", HomeClick);
feedbackForm.addEventListener("submit", confirmSubmit);
for (let i = 0; i < projectBubble.length; i++) {
    projectBubble[i].addEventListener("click", function () { makeMeBig(PROJECT_WINDOW_ID[i]) });
}

//Load all information at startup
document.onload = loadStartInformation();



//Starts the feedback form animation
function showFeedbackForm() {
    slideInDMs();
    document.getElementById("userName").focus;
    window.location.href = "#feedback";

}
//Zooms in the feedback window
function slideInDMs() {
    feedbackWindow.classList.add("zoom-in-from-left");
    feedbackWindow.classList.remove("d-none");
    feedbackWindow.classList.remove("zoom-out-to-right");

    feedbackHeader.classList.add("zoom-in-from-left");
    feedbackHeader.classList.remove("d-none");
    feedbackHeader.classList.remove("zoom-out-to-right");

}
//When user clicks Submit
function confirmSubmit() {
    alert("Thank you for your submission.");
    zoomOutFeedback();
}
//Zooms out the feedback window
function zoomOutFeedback() {
    feedbackWindow.classList.add("zoom-out-to-right");
    feedbackWindow.classList.remove("zoom-in-from-left");

    feedbackHeader.classList.remove("zoom-in-from-left");
    feedbackHeader.classList.add("zoom-out-to-right");

    console.log(feedbackWindow.className);
}
//Expands the windows when clicked:
function makeMeBig(itemId) {
    clickedABubble = true;

    const thisItem = document.getElementById(itemId);
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    let widthRatio = screenWidth / myWidth(itemId);
    let moveHori = "1vw";
    let moveVert = "1vw";

    if (lastExpandedWindowId == itemId) {
        //If you click the same window, it will navigate to that page
        makeMeNormal(lastExpandedWindowId);
        window.location.href = projectURL(itemId);
    } else {
        // Otherwise Shrink whatever the last window was
        makeMeNormal(lastExpandedWindowId);
        //Then expand the clicked window
        thisItem.classList.remove("levitate");
        //Show the text
        const labelCaption = thisItem.querySelectorAll(".carousel-caption");
        for (let i = 0; i<labelCaption.length; i++) {
            labelCaption[i].classList.remove("d-none");
        }
        //Site will attempt to scale based on viewport
        //Ensure window doesn't expand larger than smallest viewport dimension
        (screenHeight < screenWidth) ?
            widthRatio = screenHeight / myHeight(itemId) :
            widthRatio = screenWidth / myWidth(itemId);

        document.documentElement.style.setProperty("--bubble-scale-x", widthRatio * 0.75);
        document.documentElement.style.setProperty("--bubble-scale-y", widthRatio * 0.75);
        moveHori = calculateHori(itemId) + "vw";
        moveVert = calculateVert(itemId) + "vw";

        document.documentElement.style.setProperty("--bubble-translate-y", moveVert);
        document.documentElement.style.setProperty("--bubble-translate-x", moveHori);
        thisItem.classList.add("expand-center");

        lastExpandedWindowId = itemId;
    }

}
//Resets the bubble windows
function makeMeNormal(itemId) {
    const thisItem = document.getElementById(itemId);

    if (itemId) {
        //Shrink Window
        thisItem.classList.remove("expand-center");
        thisItem.classList.add("levitate");
        //Remove caption
        const labelCaption = thisItem.querySelectorAll(".carousel-caption");
        for (let i = 0; i<labelCaption.length; i++) {
            labelCaption[i].classList.add("d-none");
        }
        lastExpandedWindowId = "";

    }
}

//Calculates dimensions of bubble windows for animations
function myWidth(itemId) {
    return document.getElementById(itemId).clientWidth;
}
function myHeight(itemId) {
    return document.getElementById(itemId).clientHeight;
}
function myLeft(itemId) {
    return document.getElementById(itemId).getBoundingClientRect().x;
}
function myTop(itemId) {
    return document.getElementById(itemId).getBoundingClientRect().y;
}
function myDimensions(itemId) {
    return [myLeft(itemId), myTop(itemId), myWidth(itemId), myHeight(itemId)];
}

//Calculates how much to move the window horizontally
function calculateHori(itemId) {
    const screenWidth = window.innerWidth;
    let calcOne = screenWidth / 2;

    calcOne -= (myWidth(itemId) / 2);
    calcOne -= myLeft(itemId);
    calcOne /= screenWidth

    return calcOne * 30;
}

//Calculates how much to move thie window Vertically
function calculateVert(itemId) {
    const screenHeight = window.innerHeight;
    let calcOne = screenHeight / 2;

    calcOne = calcOne - myTop(itemId);
    calcOne = calcOne - (myHeight(itemId) / 2);
    calcOne = calcOne / screenHeight

    return calcOne * 30;
}


//Parses the URL list and navigates to the appropriate page depending on bubble clicked.
function projectURL(refId) {
    let urlAddress = "#";
    const urlArray = urlList.split("\n");
    console.log(`The fetched text is: ${urlArray}`);
    
    switch (refId) {
        case PROJECT_WINDOW_ID[0]:
            urlAddress = "projectdisplay.html";
            sessionStorage.setItem("pageToDisplay", urlArray[0]);
            break;
        case PROJECT_WINDOW_ID[1]:
            urlAddress = "projectdisplay.html";
            sessionStorage.setItem("pageToDisplay", urlArray[1]);
            break;
        case PROJECT_WINDOW_ID[2]:
            urlAddress = "projectdisplay.html";
            sessionStorage.setItem("pageToDisplay", urlArray[2]);
            break;
        default:
            urlAddress = "#";
    }

    return urlAddress;
}

//Listens for a home click to make windows small
function HomeClick() {
    if (clickedABubble == false) {
        if (lastExpandedWindowId) {
            makeMeNormal(lastExpandedWindowId);
        }
    } else {
        clickedABubble = false;
    }
}
//gets all text from a file
async function getTextFromFile(fileName, callBack){
    const file = await fetch(fileName);
    const text = await file.text();
    callBack(text);
    //return "adfafdf";//texty;
   
}
//stores the URL list into the global variable. Used for async callback
function storeURLList(text){
    //Global variable
    urlList = text;
}
//Runs all initialization tasks
function loadStartInformation(){
    getTextFromFile("text/webpages.txt",storeURLList);
}