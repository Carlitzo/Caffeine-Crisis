import { renderNotes } from "../renderingFunctions/renderNotes/renderNotes.js";
import { renderMap } from "../renderingFunctions/renderMap/renderMap.js";
import { renderPhone } from "../renderingFunctions/renderPhone/renderPhone.js";

export function setAppEvents() {
    const notesIcon = document.getElementById("notesIcon");
    const instagramIcon = document.getElementById("instagramIcon");
    const mapsIcon = document.getElementById("mapsIcon");
    const phoneIcon = document.getElementById("phoneIcon");
    const youtubeIcon = document.getElementById("youtubeIcon");
    const youtubePopup = document.getElementById("youtubePopup");
    const youtubeVideo = document.getElementById("youtubeVideo");
    const closePopup = document.getElementById("closePopup");

    if (notesIcon && instagramIcon && mapsIcon && phoneIcon && youtubeIcon && youtubePopup && youtubeVideo && closePopup) {
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
        });

        youtubeIcon.addEventListener("click", (event) => {
            event.preventDefault();
            youtubePopup.classList.add("show");
            youtubeVideo.src = "./../MOBILE_UI/videos/Never_gonna.mp4";
            youtubeVideo.currentTime = 0;
            youtubeVideo.load();
            youtubeVideo.play();
        });

        closePopup.addEventListener("click", () => {
            youtubePopup.classList.remove("show");
            youtubeVideo.pause();
            youtubeVideo.src = "";
        });

        youtubePopup.addEventListener("click", (event) => {
            if (event.target === youtubePopup) {
                youtubePopup.classList.remove("show");
                youtubeVideo.pause();
                youtubeVideo.src = "";
            }
        });
    }
}