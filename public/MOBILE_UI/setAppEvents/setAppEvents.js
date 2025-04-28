import { renderNotes } from "../renderingFunctions/renderNotes/renderNotes.js";
import { renderMap } from "../renderingFunctions/renderMap/renderMap.js";
import { renderPhone } from "../renderingFunctions/renderPhone/renderPhone.js";


export function setAppEvents() {
    const notesIcon = document.getElementById("notesIcon");
    const instagramIcon = document.getElementById("instagramIcon");
    const mapsIcon = document.getElementById("mapsIcon");
    const phoneIcon = document.getElementById("phoneIcon");
    const youtubeIcon = document.getElementById("youtubeIcon");

    
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

    youtubeIcon.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    });
}