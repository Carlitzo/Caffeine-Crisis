import { openAppFunction } from "../appFunctions/openAppFunction.js";
import { closeAppFunction } from "../appFunctions/closeAppFunction.js";
import { renderNotes } from "../renderingFunctions/renderNotes/renderNotes.js";
import { renderMap } from "../renderingFunctions/renderMap/renderMap.js";


export function setAppEvents() {
    const notesIcon = document.getElementById("notesIcon");
    const instagramIcon = document.getElementById("instagramIcon");
    const mapsIcon = document.getElementById("mapsIcon");
    
    notesIcon.addEventListener("click", () => {
        renderNotes(notesIcon);
    })

    instagramIcon.addEventListener("click", () => {
        console.log("hej du tryckte på instagramikonen");
    })
    
    mapsIcon.addEventListener("click", () => {
        renderMap(mapsIcon);
    })

}