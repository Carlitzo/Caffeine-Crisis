import { openAppFunction } from "./../appFunctions/openAppFunction.js";
import { closeAppFunction } from "./../appFunctions/closeAppFunction.js";
import { renderNotes } from "./../renderingFunctions/renderNotes/renderNotes.js";


export function setEvents() {
    const notesIcon = document.getElementById("notesIcon");
    const instagramIcon = document.getElementById("instagramIcon");
    
    notesIcon.addEventListener("click", () => {
        renderNotes(notesIcon);
    })

    instagramIcon.addEventListener("click", () => {
        console.log("hej du tryckte på instagramikonen");
    })

}