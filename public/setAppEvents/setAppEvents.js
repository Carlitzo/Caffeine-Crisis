import { renderNotes } from "../renderingFunctions/renderNotes/renderNotes.js";
import { renderMap } from "../renderingFunctions/renderMap/renderMap.js";
import { renderPhone } from "../renderingFunctions/renderPhone/renderPhone.js";


export function setAppEvents() {
    const notesIcon = document.getElementById("notesIcon");
    const instagramIcon = document.getElementById("instagramIcon");
    const mapsIcon = document.getElementById("mapsIcon");
    const phoneIcon = document.getElementById("phoneIcon");
    
    notesIcon.addEventListener("click", () => {
        renderNotes(notesIcon);
    });

    instagramIcon.addEventListener("click", (event) => {
        event.preventDefault();
    
        window.location.href = "instagram://user?username=olle_ollesson";
    });
    
    mapsIcon.addEventListener("click", () => {
        renderMap(mapsIcon);
    });

    phoneIcon.addEventListener("click", () => {
        renderPhone(phoneIcon);
    })
}