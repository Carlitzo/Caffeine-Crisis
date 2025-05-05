import { openAppFunction } from "../../appFunctions/openAppFunction.js";
import { closeAppFunction } from "../../appFunctions/closeAppFunction.js";

export function renderNews (newsIcon) {

    const newsContainer = document.createElement("div");
    const newsImg = document.createElement("img");
    const returnContainer = document.createElement("div");
    const returnImg = document.createElement("img");
    const video = document.createElement("video");

    newsContainer.id = "newsContainer";
    newsImg.id = "newsImg";
    newsImg.src = "./../MOBILE_UI/images/Sydsvenskan.png"
    returnContainer.id = "returnContainer";
    returnImg.id = "returnImageArrow";
    returnImg.src = "./../MOBILE_UI/icons/arrow-notes.png";
    video.id = "videoSydsvenskan";
    video.src = "./../videos/Sydsvenskan.mp4";

    newsContainer.appendChild(newsImg);
    newsContainer.appendChild(returnContainer);
    newsContainer.appendChild(video)
    returnContainer.appendChild(returnImg);

    openAppFunction(newsIcon, newsContainer);

    returnContainer.addEventListener("click", () => {
        closeAppFunction(newsContainer, newsIcon);
    })
}