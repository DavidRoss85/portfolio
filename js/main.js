'use strict';
// const switcher = document.querySelector('.btn');
const feedbackWindow = document.getElementById("feedbackContainer");
const feedbackHeader = document.getElementById("feedbackHead");
var lastExpandedWindowId = "";
var lastExpandedWindowWidth = document.getElementById("projectHeader").style.width;
var lastExpandedWindowHeight = document.getElementById("projectHeader").style.height;



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

    console.log(feedbackWindow.className);
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
function makeMeBig(itemId){
    if (lastExpandedWindowId == itemId){
        makeMeNormal(lastExpandedWindowId);
    }
    else{
        makeMeNormal(lastExpandedWindowId);
        lastExpandedWindowWidth = document.getElementById(itemId).style.width;
        lastExpandedWindowHeight = document.getElementById(itemId).style.height;
        document.getElementById(itemId+"Text").classList.toggle("d-none");
        if (window.innerWidth > window.innerHeight){
            document.getElementById(itemId).style.width = "100vh";
            document.getElementById(itemId).style.height = "100vh";
        }
        else{
            document.getElementById(itemId).style.width = "100vw";
            document.getElementById(itemId).style.height = "100vw";
        };
        document.getElementById(itemId).scrollIntoView(false);
        // window.location.href = "#" +itemId;
        // window.scrollBy(0,-30);
        lastExpandedWindowId = itemId;
    };
    console.log(document.getElementById(itemId).style.width);
};

function makeMeNormal(itemId){
    if ( itemId !=""){
    document.getElementById(itemId).style.width=lastExpandedWindowWidth;
    document.getElementById(itemId).style.height=lastExpandedWindowHeight;
    document.getElementById(itemId+"Text").classList.toggle("d-none");
    lastExpandedWindowId="";
    console.log("makeMeNormal");
    };
};
function shakeObjectSideways(elementToShake){
    elementToShake=document.getElementsById("project01");
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