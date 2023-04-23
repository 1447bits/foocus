import {createBucket, SetTimer} from "./setTimer.js"

const mainContainer = document.getElementById("main-container")
SetTimer("#web")

const addBucket = document.getElementById("addBucket")
addBucket.addEventListener("click", ()=>{
    mainContainer.appendChild(createBucket("c++"))
})