import {projectList, navList} from '../data/weblist'
import { resumeDownload } from '../data/weblist';

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
    // const fileToFetch=require("url:../data/weblist.txt");
    // const file = await fetch(fileToFetch);
    // const text = await file.json();
    return projectList;

}

async function generateNavbar(targetPage = "", targetEl = "nav", links =[{"title":"Home","url":"#"}]){
    let navData = [];
    if (targetPage){
        // const fileToFetch=require("url:../data/navlist.txt");
        // const file = await fetch(fileToFetch);
        // const text = await file.json();
        navData = navList[targetPage];
    } else{
        navData = links;
    }
    const navEl = document.querySelector(targetEl);
    navEl.setAttribute("class","navbar navbar-expand-md transparent-bar-nav navbar-dark sticky-top styled-hyperlink");
    let navHTML = `
    <div class="container-fluid">
        <a href="index.html" class="navbar-brand levitate short-delay-5 logo" role="logo">
            <!--logo-->
            <svg class="px-0 mx-0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="230 0 580 580" preserveAspectRatio="xMinYMin meet" width="50px" alt="logo">
                <circle id="e1_circle" cx="528.181" cy="284.822" r="265.87" transform="matrix(1.12493 0 0 1.12493 -68.9927 -31.5783)"/>
                <text class="svg-text-1" x="409.111" y="152.031" id="e6_texte" transform="matrix(9.04567 0 0 9.04567 -3341.27 -1030.38)">dR</text>
                <text class="svg-text-2" x="392.274" y="147.587" id="e3_texte" transform="matrix(16.0779 0 0 16.0779 -6144.85 -1974.69)" textLength="16.399152564561803">{</text>
                <text class="svg-text-2" x="419.808" y="147.388" id="e5_texte" transform="matrix(16.0721 0 0 16.0721 -6151.71 -1975.78)" textLength="16.399152564561803">}</text>
            </svg>
        </a>

        <!--for debug (Displays BS viewport)-->
        <!-- <span class="d-sm-none">XS</span>
        <span class="d-none d-sm-inline d-md-none">SM</span>
        <span class="d-none d-md-inline d-lg-none">MD</span>
        <span class="d-none d-lg-inline d-xl-none">LG</span>
        <span class="d-none d-xl-inline">XL</span>
        <span class="d-inline">&nbsp;View</span> -->


        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Wrapped all of the Link names in a ...<span data-bs-toggle... to work around a glitch where the navbar would remain open after being
        clicked. Adding those attributes to the anchor or list item would break the navigation link. 
        (<li><a><span>text</span></a></li>) -->
        <div class="collapse navbar-collapse justify-content-center" id="mainMenu">
            <ul class="navbar-nav px-4 text-end">`
    
    for(let link of navData){
        navHTML += `
        <li class="navbar-item levitate short-delay-2"><a href="${link.url}" class="navbar-link px-4" ${link.url===resumeDownload? "target='_blank'":""}><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">${link.title}</span></a></li>
        `
    }
            // `
            //     <li class="navbar-item levitate short-delay-1"><a href="#" aria-current="true" class="navbar-link active px-4"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</span></a></li>
            //     <li class="navbar-item levitate short-delay-2"><a href="#intro" class="navbar-link px-4"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</span></a></li>
            //     <li class="navbar-item levitate short-delay-3"><a href="#details" class="navbar-link px-4"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Skills</span></a></li>
            //     <li class="navbar-item levitate short-delay-4"><a href="#projects" class="navbar-link px-4"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Projects</span></a></li>
            //     <li class="navbar-item levitate short-delay-5"><a href="#footer" class="navbar-link px-4"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</span></a></li>
            // `
    
    
    navHTML+=`
            </ul>
        </div>
    </div>
    `    
    navEl.innerHTML = navHTML;

}

function generateFooter(targetEl="footer", feedbackButton = false){
    const footEl = document.querySelector(targetEl);
    footEl.setAttribute("class","text-start");
    let footerHTML=`
    <hr/>
    <div class="container-fluid">
        <div class="row transparent-box styled-hyperlink"> <!--Links-->
            <div class="col-sm-4 col-md-6" > <!--Connect-->
                <div class="row"><!--Header-->
                    <h4 class="col with-accent2 text-center">Connect:</h4>
                </div>
                <div class="row"><!--links-->
                    <a class="col text-center text-nowrap" href="https://www.linkedin.com/in/david-a-ross-wa/"><i class="fa-brands fa-linkedin fa-xl"></i> <span>LinkedIn</span></a>
                    <a class="col text-center text-nowrap short-delay-1" href="https://github.com/DavidRoss85"><i class="fa-brands fa-github fa-xl"></i> <span>GitHub</span></a>
                    <a class="col text-center text-nowrap short-delay-2" href="https://www.instagram.com/davidross.web.dev?igsh=ZHd2YTRieWdkMjA="><i class="fa-brands fa-instagram fa-xl"></i> <span>Instagram</span></a>
                    <a class="col text-center text-nowrap short-delay-3" href="https://www.youtube.com/channel/UCedCZdgvbRnsnoBOMEJ15KQ"><i class="fa-brands fa-youtube"></i> <span>YouTube</span></a>
                </div>
            </div>
            <div class="col-sm-8 col-md-6"><!--Contact-->
                <div class="row"> <!--Header-->
                    <div class="col">
                        <h4 class="with-accent2 text-center">Contact:</h4>
                    </div>
                </div>
                <div class="row"><!--links-->
                    <div class="col text-center">
                        <a class="text-nowrap" href="mailto:officialdavidross@gmail.com"><i class="fa-solid fa-envelope fa-xl"></i> <span>officialdavidross@gmail.com</span></a> 
                    </div>
                    <div class="col text-center">
                        <a class="text-nowrap" href="${resumeDownload}" download="DavidRoss_Resume.docx" target="_blank"><i class="fa-solid fa-file"></i> <span>Resumé</span></a> 
                    </div>
                    <!--<div class="col text-center">
                        <a class="short-delay-2 text-nowrap" href="tel:+1-555-555-5555"><i class="fa-solid fa-phone fa-xl"></i> <span>+1-555-555-5555</span></a>
                    </div>-->
                </div>
                `
    if(feedbackButton){
        footerHTML+=`
                    <div class="row"><!--feedback button-->
                        <div class="col text-center">
                            <button class="btn btn-warning levitate short-delay-3" id="feedbackButton" hidden>Send Feedback</button>
                        </div>
                    </div>
                    `
    }
    footerHTML +=`
            </div>
        </div>
    </div>
    <div class="transparent-bar-nav text-center"><!--Copyright footer-->
        © Copyright all rights reserved.        
    </div>
    `
    footEl.innerHTML = footerHTML;
}
export{
    getMyProjects,
    test,
    fadeOutMainPage,
    fadeOutLoadingScreen,
    showLoadingScreen,
    hideLoadingScreen,
    sleep,
    generateNavbar,
    generateFooter,
    mainPageArea
}