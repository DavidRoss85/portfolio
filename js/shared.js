
const mainPageArea = document.getElementById("mainSection");
const loadingScreen = document.getElementById("loadScreen");

function fadeOutMainPage(delay = 1000, callback = ()=>{console.log("No function passed")}){
    mainPageArea.addEventListener("animationend",showLoadingScreen);
    mainPageArea.classList.add("fade-out");
    sleep(delay).then(callback)
}

function fadeOutLoadingScreen(delay = 1000, callback = ()=>{console.log("No function passed")}){
    loadingScreen.addEventListener("animationend",hideLoadingScreen);
    loadingScreen.classList.add("fade-out");
    sleep(delay).then(callback);
}
function showLoadingScreen(){
    mainPageArea.classList.add("d-none");
    mainPageArea.classList.remove("fade-out");
    loadingScreen.classList.remove("d-none");
    mainPageArea.removeEventListener("animationend",showLoadingScreen);
}

function hideLoadingScreen(){
    mainPageArea.classList.remove("d-none");
    loadingScreen.classList.remove("fade-out");
    loadingScreen.classList.add("d-none");
    loadingScreen.removeEventListener("animationend",hideLoadingScreen);
}


function test(){
    console.log("in Test... wait 5 seconds")
    sleep(5000).then(()=>console.log("Test complete"))
}
//timer sleep function
async function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time))
};

async function getMyProjects(){
    // let fileToFetch = require(PROJECT_LIST_URL);
    const fileToFetch=require("url:../data/weblist.txt");
    const file = await fetch(fileToFetch);
    const text = await file.json();
    console.log(text);
    return text;

}

export{
    getMyProjects,
    test,
    fadeOutMainPage,
    fadeOutLoadingScreen,
    showLoadingScreen,
    hideLoadingScreen,
    sleep
}