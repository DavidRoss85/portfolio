"use strict";

//Global Constants
const PROJECT_WINDOW_ID = ["project01", "project02", "project03"];
const PROJECT_LIST_URL = "url:../data/weblist.txt";



const feedbackWindow = document.getElementById("feedbackContainer");
const feedbackHeader = document.getElementById("feedbackHead");
const feedbackButton = document.getElementById("feedbackButton");
const cancelFeedbackBtn = document.getElementById("cancelFeedbackBtn");
const mainPageArea = document.getElementById("mainSection");
const feedbackForm = document.getElementById("feedbackForm");
const projectBubble = [document.getElementById(PROJECT_WINDOW_ID[0]), document.getElementById(PROJECT_WINDOW_ID[1]), document.getElementById(PROJECT_WINDOW_ID[2])];

//Global Variables
let urlList = [];
let lastExpandedWindowId = "";
let clickedABubble = false;

//add event listeners
feedbackButton.addEventListener("click", showFeedbackForm);
cancelFeedbackBtn.addEventListener("click",hideFeedbackForm);
mainPageArea.addEventListener("click", HomeClick);
feedbackForm.addEventListener("submit", confirmSubmit);
for (let i = 0; i < projectBubble.length; i++) {
    projectBubble[i].addEventListener("click", function () { makeMeBig(PROJECT_WINDOW_ID[i]) });
}

//Load all information at startup
document.onload = loadStartInformation();



//Starts the feedback form animation
function showFeedbackForm() {
    flyInWindow("feedbackContainer");
    flyInWindow("feedbackHead");
    document.getElementById("userName").focus;
    window.location.href = "#feedback";
}
//Hide the feedback form
function hideFeedbackForm(){
    flyOutWindow("feedbackContainer");
    flyOutWindow("feedbackHead");
}
//Flys in the window
function flyInWindow(itemId){
    const currentWindow = document.getElementById(itemId);
    
    currentWindow.classList.add("fly-in-from-left");
    currentWindow.classList.remove("d-none");
    currentWindow.classList.remove("fly-out-to-right");
}

//When user clicks Submit
function confirmSubmit() {
    alert("Thank you for your submission.");
    flyOutWindow("feedbackContainer");
}
//Zooms out the feedback window
function flyOutWindow(itemId) {
    const currentWindow = document.getElementById(itemId);

    currentWindow.classList.add("fly-out-to-right");
    currentWindow.classList.remove("fly-in-from-left");
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
        //projectURL(itemId);
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
    const urlArray = urlList //.split("\n");
    //console.log(`The fetched text is: ${urlArray}`);
    
    switch (refId) {
        case PROJECT_WINDOW_ID[0]:
            urlAddress = "projectdisplay.html";
            sessionStorage.setItem("pageToDisplay", urlArray[0].url);
            break;
        case PROJECT_WINDOW_ID[1]:
            urlAddress = "projectdisplay.html";
            sessionStorage.setItem("pageToDisplay", urlArray[1].url);
            break;
        case PROJECT_WINDOW_ID[2]:
            urlAddress = "projectdisplay.html";
            sessionStorage.setItem("pageToDisplay", urlArray[2].url);
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
async function getMyProjects(){
        // let fileToFetch = require(PROJECT_LIST_URL);
        const fileToFetch=require("url:../data/weblist.txt");
        const file = await fetch(fileToFetch);
        const text = await file.json();
        console.log(text);
        return text;
   
}
//Runs all initialization tasks
async function loadStartInformation(){
    // "title": "",
    // "url": "",
    // "description":""
    // "images":[]

    urlList = await getMyProjects();
    //constructProjectBubbles(projectInfo);


}

//WIP
function constructProjectBubbles(projectInfo){
/* <div class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2500">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="images/Nucamp/nucamp1.png" alt="..." class="d-block">
            <div class="carousel-caption transparent-bar d-none">
                <p>Visit the Nucamp Webpage</p>
            </div>

        </div>
        <div class="carousel-item">
            <img src="images/Nucamp/nucamp2.png" alt="..." class="d-block">
            <div class="carousel-caption transparent-bar d-none">
                <p>Visit the Nucamp Webpage</p>
            </div>

        </div>
        <div class="carousel-item">
            <img src="images/Nucamp/nucamp3.png" alt="..." class="d-block">
            <div class="carousel-caption transparent-bar d-none">
                <p>Visit the Nucamp Webpage</p>
            </div>

        </div>
    </div>
</div> */
    const theImage = require("../images/Nucamp/nucamp1.png");
    for(let i=0;i<3;i++){
        const carouselHTML = `
        <div class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2500">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src= "${theImage}" alt="..." class="d-block">
                    <div class="carousel-caption transparent-bar d-none">
                        <p>${projectInfo[i].title}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../images/Nucamp/nucamp2.png" alt="..." class="d-block">
                    <div class="carousel-caption transparent-bar d-none">
                        <p>Visit the Nucamp Webpage</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../images/Nucamp/nucamp3.png" alt="..." class="d-block">
                    <div class="carousel-caption transparent-bar d-none">
                        <p>Visit the Nucamp Webpage</p>
                    </div>
                </div>
            </div>
        </div>
        `
        const projectWindow = document.getElementById(`project02`);
        projectWindow.innerHTML= carouselHTML;
    }
    console.log("construction successful");
}