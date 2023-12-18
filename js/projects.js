"use strict";
// import {
//     test,
//     fadeOutMainPage,
//     fadeOutLoadingScreen,
//     showLoadingScreen,
//     hideLoadingScreen,
//     sleep
// } from "./shared"

//Global Variables
// let projectArray = [];

//Load all information at startup
// document.onload = loadStartInformation();
// document.addEventListener("load",loadStartInformation);
document.querySelector("body").addEventListener("click",loadStartInformation)
async function loadStartInformation(){
    
    alert("this runs right now"); 
    // projectArray = await getMyProjects();
    // console.log(projectArray);
    // displayProjects(projectArray);
    // await sleep(100);
    // fadeOutLoadingScreen(275);
}

// async function getMyProjects(){
//     // let fileToFetch = require(PROJECT_LIST_URL);
//     const fileToFetch=require("url:../data/weblist.txt");
//     const file = await fetch(fileToFetch);
//     const text = await file.json();
//     console.log(text);
//     return text;

// }
// function displayProjects(projectInfo){
//     // <div class="col-6 col-lg-4 transparent-box">
//     //         <img src="images/Coffee_Shop/Coffee_01.png" alt="..." class="d-block img-fluid">
//     //     </div>
//     //     <div class="col-4 col-lg-6 align-self-center top-summary">
//     //         Text about this thing!
//     //     </div>
//     // </div>

//     const projectRow = document.getElementById("projectRow");
//     let projectHTML = ``

//     for (project of projectInfo) {
        
//         const tmpSrc = document.getElementById(project.imgRef[0]).src;

//         projectHTML += `
//             <div class="col-6 col-lg-4 transparent-box">
//                     <img src="i${tmpSrc}" alt="..." class="d-block img-fluid">
//                 </div>
//                 <div class="col-4 col-lg-6 align-self-center top-summary">
//                     <h3>${project.title}</h3>
//                     <p>${project.description}</p>
//                 </div>
//             </div>
//             `
//     }
//     projectRow.innerHTML = projectHTML;
// }