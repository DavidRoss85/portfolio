'use strict';
// const switcher = document.querySelector('.btn');
const feedbackWindow = document.getElementById("feedbackContainer");
const feedbackHeader = document.getElementById("feedbackHead");
let lastExpandedWindowId = "";
let clickedABubble = false;
let projectDisplayAddress = "";

//Starts the feedback form animation
function showFeedbackForm(){
    slideInDMs();
    document.getElementById("userName").focus;
    window.location.href="#feedback";
    
}
//Zooms in the feedback window
function slideInDMs(){
    feedbackWindow.classList.add("zoom-in-from-left");
    feedbackWindow.classList.remove("d-none"); 
    feedbackWindow.classList.remove("zoom-out-to-right");

    feedbackHeader.classList.add("zoom-in-from-left");
    feedbackHeader.classList.remove("d-none"); 
    feedbackHeader.classList.remove("zoom-out-to-right");

}
function confirmSubmit(){
    alert("Thank you for your submission.");
    zoomOutFeedback();
}
//Zooms out the feedback window
function zoomOutFeedback(){
    feedbackWindow.classList.add("zoom-out-to-right");
    feedbackWindow.classList.remove("zoom-in-from-left");

    feedbackHeader.classList.remove("zoom-in-from-left");
    feedbackHeader.classList.add("zoom-out-to-right");

    console.log(feedbackWindow.className);
}

//Expands the windows when clicked:
function makeMeBig(itemId){
    clickedABubble=true;

    const thisItem = document.getElementById(itemId);
    const screenWidth = window.innerWidth;
    const screenHeight= window.innerHeight;
    let widthRatio = screenWidth/myWidth(itemId);
    let moveHori = "1vw";
    let moveVert = "1vw";

    if (lastExpandedWindowId == itemId){
        //If you click the same window, it will navigate to that page
        makeMeNormal(lastExpandedWindowId);
        window.location.href = projectURL(itemId);
    }else{
        // Otherwise Shrink whatever the last window was
        makeMeNormal(lastExpandedWindowId);
        //Then expand the clicked window
        thisItem.classList.remove("levitate");

        //Site will attempt to scale based on viewport
        //Ensure window doesn't expand larger than smallest viewport dimension
        (screenHeight < screenWidth) ? 
            widthRatio = screenHeight/myHeight(itemId):
            widthRatio = screenWidth/myWidth(itemId);

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
function makeMeNormal(itemId){
    const thisItem = document.getElementById(itemId);

    if (itemId){
        thisItem.classList.remove("expand-center");
        thisItem.classList.add("levitate");
        lastExpandedWindowId="";

    }
}


function shakeObjectSideways(elementToShake){
    elementToShake=document.getElementsById("project01");
}

//Calculates dimensions of bubble windows for animations
function myWidth(itemId){
    return document.getElementById(itemId).clientWidth;
}
function myHeight(itemId){
    return document.getElementById(itemId).clientHeight;
}
function myLeft(itemId){
    return document.getElementById(itemId).getBoundingClientRect().x;
}
function myTop(itemId){
    return document.getElementById(itemId).getBoundingClientRect().y;
}
function myDimensions(itemId){
    return [myLeft(itemId),myTop(itemId),myWidth(itemId),myHeight(itemId)];
}

//Calculates how much to move the window horizontally
function calculateHori(itemId){
    const screenWidth = window.innerWidth;
    let calcOne = screenWidth/2;

    calcOne -= (myWidth(itemId)/2);
    calcOne -= myLeft(itemId);
    calcOne /= screenWidth

    return calcOne * 30;
}

//Calculates how much to move thie window Vertically
function calculateVert(itemId){
    const screenHeight= window.innerHeight;
    let calcOne = screenHeight/2;

    calcOne = calcOne - myTop(itemId);
    calcOne=calcOne-(myHeight(itemId)/2);
    calcOne=calcOne/screenHeight

    return calcOne * 30;
}


//Place websites for each bubble here
function projectURL(refId){
    let urlAddress = "#";

    switch (refId) {
        case "project01":
            urlAddress="projectdisplay.html";
            projectDisplayAddress = "index.html"
            break;
        case "project02":
            urlAddress="projectdisplay.html";
            projectDisplayAddress="../../schoolwork/nucampsite/index.html";
            break;
        case "project03":
            urlAddress="#";
            break;
        default:
            urlAddress="#";
    }
    
    return urlAddress;
}

//Listens for a home click to make windows small
function HomeClick(){
    if (clickedABubble==false){
        if (lastExpandedWindowId) {
            makeMeNormal(lastExpandedWindowId);
        }
    }else {
        clickedABubble=false;
    }
}

function getDisplayPage(itemId){
    // document.getElementById(itemId).setAttribute("src",projectDisplayAddress);
    // console.log('Web URL: ' + projectDisplayAddress);
}
// switcher.addEventListener('click', function() {
//     document.body.classList.toggle('light-theme');
//     document.body.classList.toggle('dark-theme');
    
//     const className = document.body.className;
//     if(className == "light-theme") {
//         this.textContent = "Dark";
//     } else {
//         this.textContent = "Light";
//     }
//     console.log("Current class name: " + className);
// });