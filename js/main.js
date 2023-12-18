"use strict";
import {
    getMyProjects,
    fadeOutMainPage,
    fadeOutLoadingScreen,
    sleep,
    generateNavbar
} from "./shared"
// export {loadingScreen,mainPageArea}
//Global Constants
const PROJECT_WINDOW_ID = ["project1", "project2", "project3"];

const feedbackButton = document.getElementById("feedbackButton");
const cancelFeedbackBtn = document.getElementById("cancelFeedbackBtn");
const mainPageArea = document.getElementById("mainSection");
const loadingScreen = document.getElementById("loadScreen");
const feedbackForm = document.getElementById("feedbackForm");
const projectBubble = [document.getElementById(PROJECT_WINDOW_ID[0]), document.getElementById(PROJECT_WINDOW_ID[1]), document.getElementById(PROJECT_WINDOW_ID[2])];
const profileSummary = document.getElementById("profileSummary");
const allProjectsLink = document.getElementById("allProjectsLink");

//Global Variables
let projectArray = [];
let lastExpandedWindowId = "";
let clickedABubble = false;

//add event listeners
profileSummary.addEventListener("animationend", ()=>{profileSummary.classList.remove("fly-in-from-left")})
feedbackButton.addEventListener("click", showFeedbackForm);
cancelFeedbackBtn.addEventListener("click",hideFeedbackForm);
mainPageArea.addEventListener("click", HomeClick);
feedbackForm.addEventListener("submit", confirmSubmit);
allProjectsLink.addEventListener("click",()=>{fadeOutMainPage(350,()=>{document.location.href= "../projectlist.html"});});
for (let i = 0; i < projectBubble.length; i++) {
    projectBubble[i].addEventListener("click", function () { makeMeBig(PROJECT_WINDOW_ID[i]) });
}

//Load all information at startup
window.onpageshow = ()=>loadStartInformation();

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
        fadeOutMainPage(275,()=>document.location.href=projectURL(itemId))
        // window.location.href = projectURL(itemId);
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
    
    switch (refId) {
        case PROJECT_WINDOW_ID[0]:
            urlAddress = "projectdisplay.html";
            sessionStorage.setItem("pageToDisplay", projectArray[0].url);
            break;
        case PROJECT_WINDOW_ID[1]:
            urlAddress = "projectdisplay.html";
            sessionStorage.setItem("pageToDisplay", projectArray[1].url);
            break;
        case PROJECT_WINDOW_ID[2]:
            urlAddress = "projectdisplay.html";
            sessionStorage.setItem("pageToDisplay", projectArray[2].url);
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

//Runs all initialization tasks
async function loadStartInformation(){
   
    await generateNavbar("index","nav");
    projectArray = await getMyProjects();
    constructProjectBubbles(projectArray);
    await sleep(100);
    fadeOutLoadingScreen(275);
    
}

function constructProjectBubbles(projectInfo){
    
    //Note: Cannot construct a bootstrap carousel from scratch or it will not animate.
    //Must append to an already existing bootstrap carousel.
    for (let i = 0; i < 3; i++) {

        let carouselHTML = `<div class="carousel-inner">`

        for (let j = 0; j < projectInfo[i].imgRef.length; j++) {
            const tmpSrc = document.getElementById(projectInfo[i].imgRef[j]).src;
            let tmpText = "";
            if (j === 0) tmpText = "active";

            carouselHTML += `
            <div class="carousel-item ${tmpText}">
                <img src= "${tmpSrc}" alt="..." class="d-block">
                <div class="carousel-caption transparent-bar-center d-none">
                    <p>${projectInfo[i].title}</p>
                </div>
            </div>
            `
        }
        carouselHTML += `
        </div>
        `
        const projectWindow = document.getElementById(PROJECT_WINDOW_ID[i]).firstElementChild;//PROJECT_WINDOW_ID[i]);
        const projectHead = document.getElementById(`pj${i+1}Head`);
        const projectDesc = document.getElementById(`pj${i+1}Desc`);

        projectWindow.innerHTML = carouselHTML;
        projectHead.textContent = projectInfo[i].title;
        projectDesc.textContent = projectInfo[i].description;
    }
    console.log("construction successful");
}