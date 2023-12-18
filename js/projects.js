"use strict";
import {
    getMyProjects,
    fadeOutLoadingScreen,
    sleep,
    generateNavbar,
    generateFooter
} from "./shared"

//Global Variables
let projectArray = [];

//Load all information at startup
window.onpageshow = ()=>loadStartInformation();

async function loadStartInformation(){
    
    await generateNavbar("projectlist","nav");
    generateFooter("footer");
    // alert("this runs right now"); 
    projectArray = await getMyProjects();
    // console.log(projectArray);
    displayProjects(projectArray);
    await sleep(100);
    fadeOutLoadingScreen(275);
}


function displayProjects(projectInfo){
    // <div class="col-6 col-lg-4 transparent-box">
    //         <img src="images/Coffee_Shop/Coffee_01.png" alt="..." class="d-block img-fluid">
    //     </div>
    //     <div class="col-4 col-lg-6 align-self-center top-summary">
    //         Text about this thing!
    //     </div>
    // </div>

    const projectRow = document.getElementById("projectRow");
    let projectHTML = ``

    for (let project of projectInfo) {
        
        const tmpSrc = document.getElementById(project.imgRef[0]).src;

        projectHTML += `
            <div class="col-md-5 transparent-box">
                <div class="row">
                    <div class="col-4">
                        <a href="${project.url}" target="_blank"><img src="${tmpSrc}" alt="..." class="d-block img-fluid"></a>
                    </div>
                    <div class="col align-self-center top-summary">
                        <a href="${project.url}" target="_blank"><h3>${project.title} <i class="fa-solid fa-arrow-up-right-from-square"></i></h3></a>
                        <p>${project.description}</p>
                    </div>
                </div>
            </div>
            `
    }
    projectRow.innerHTML = projectHTML;
}