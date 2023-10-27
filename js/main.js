'use strict';
// const switcher = document.querySelector('.btn');
const feedbackWindow = document.getElementById("feedbackContainer");
const feedbackHeader = document.getElementById("feedbackHead");
var lastExpandedWindowId = "";


function showFeedbackForm(){
    slideInDMs();
    document.getElementById("userName").focus;
    window.location.href="#feedback";
    
};
function slideInDMs(){
    feedbackWindow.classList.add("zoom-in-from-left");
    feedbackWindow.classList.remove("d-none"); 
    feedbackWindow.classList.remove("zoom-out-to-right");

    feedbackHeader.classList.add("zoom-in-from-left");
    feedbackHeader.classList.remove("d-none"); 
    feedbackHeader.classList.remove("zoom-out-to-right");

};
function confirmSubmit(){
    alert("Thank you for your submission.");
    zoomOutFeedback();
};

function zoomOutFeedback(){
    feedbackWindow.classList.add("zoom-out-to-right");
    feedbackWindow.classList.remove("zoom-in-from-left");

    feedbackHeader.classList.remove("zoom-in-from-left");
    feedbackHeader.classList.add("zoom-out-to-right");

    console.log(feedbackWindow.className);
};

//Expands the windows when clicked:
function makeMeBig(itemId){
    const thisItem = document.getElementById(itemId);
    const screenWidth = window.innerWidth;
    const screenHeight= window.innerHeight;
    var widthRatio = screenWidth/myWidth(itemId);
    var moveHori = "1vw";
    var moveVert = "1vw";

    if (lastExpandedWindowId == itemId){
        makeMeNormal(lastExpandedWindowId);
        //window.location.href = projectURL(itemId);
    }
    else{
        makeMeNormal(lastExpandedWindowId);
        thisItem.classList.remove("levitate");

        if (screenHeight > screenWidth) {
            document.documentElement.style.setProperty("--bubble-scale-x", widthRatio * 0.75);
            document.documentElement.style.setProperty("--bubble-scale-y", widthRatio * 0.75);

        }
        else {
            widthRatio = screenHeight/myHeight(itemId);

            document.documentElement.style.setProperty("--bubble-scale-x", widthRatio * 0.75);
            document.documentElement.style.setProperty("--bubble-scale-y", widthRatio * 0.75);
        }
        moveHori = calculateHori(itemId) + "vw";
        moveVert = calculateVert(itemId) + "vw";

        document.documentElement.style.setProperty("--bubble-translate-y", moveVert);
        document.documentElement.style.setProperty("--bubble-translate-x", moveHori);
        thisItem.classList.add("expand-center");
    
        console.log("Yes");
        // thisItem.scrollIntoView(false);
        // window.location.href = "#" +itemId;
        // window.scrollBy(0,-30);
        lastExpandedWindowId = itemId;
    };
    console.log("Element(x,y,width,height): " + myDimensions(itemId));
    console.log("Document Size: " + screenWidth + " " + screenHeight);
    console.log("Vert: " + moveVert);
    console.log("Hori: " + moveHori);
};

function makeMeNormal(itemId){
    const thisItem = document.getElementById(itemId);

    if ( itemId !=""){
        thisItem.classList.remove("expand-center");
        thisItem.classList.add("levitate");
        lastExpandedWindowId="";

    };
};
function shakeObjectSideways(elementToShake){
    elementToShake=document.getElementsById("project01");
};

function myWidth(itemId){
    return document.getElementById(itemId).clientWidth;
};
function myHeight(itemId){
    return document.getElementById(itemId).clientHeight;
};
function myLeft(itemId){
    return document.getElementById(itemId).getBoundingClientRect().x;
};
function myTop(itemId){
    return document.getElementById(itemId).getBoundingClientRect().y;
};
function myDimensions(itemId){
    return [myLeft(itemId),myTop(itemId),myWidth(itemId),myHeight(itemId)];
};

//Horizontal
function calculateHori(itemId){
    const screenWidth = window.innerWidth;
    var calcOne = 1;

    calcOne = screenWidth/2;
    calcOne= calcOne-(myWidth(itemId)/2);
    calcOne = calcOne - myLeft(itemId);
    calcOne = calcOne/screenWidth

    return calcOne * 50;
};

//Vertical
function calculateVert(itemId){
    const screenWidth = window.innerWidth;
    const screenHeight= window.innerHeight;
    var widthRatio = screenWidth/myWidth(itemId);
    var calcOne = 1;

    if (screenHeight < screenWidth) {
        widthRatio = screenHeight/myHeight(itemId);
    }
    calcOne = screenHeight/2;
    calcOne = calcOne - myTop(itemId);
    calcOne=calcOne-(myHeight(itemId)/2);
    calcOne=calcOne/screenHeight

    return calcOne * 30;
};



function projectURL(refId){
    var urlAddress = "";

    switch (refId) {
        case "project01":
            urlAddress="#";
            break;
        case "project02":
            urlAddress="#";
            break;
        case "project03":
            urlAddress="#";
            break;
        default:
            urlAddress="#";
    }
    
    return urlAddress;
};




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