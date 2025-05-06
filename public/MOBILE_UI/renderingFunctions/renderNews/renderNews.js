import { openAppFunction } from "../../appFunctions/openAppFunction.js";
import { closeAppFunction } from "../../appFunctions/closeAppFunction.js";

export function renderNews (newsIcon) {

    const newsContainer = document.createElement("div");
    const newsImg = document.createElement("img");
    const returnContainer = document.createElement("div");
    const returnImg = document.createElement("img");
    const video = document.createElement("video");
    const source = document.createElement("source");

    newsContainer.id = "newsContainer";
    newsImg.id = "newsImg";
    newsImg.src = "./../MOBILE_UI/images/Sydsvenskan.png"
    returnContainer.id = "returnContainer";
    returnImg.id = "returnImageArrow";
    returnImg.src = "./../MOBILE_UI/icons/arrow-red.png";
    video.id = "videoSydsvenskan";
    video.controls = true;
    source.src = "./../MOBILE_UI/videos/Sydsvenskan.video.mp4"
    source.type = "video/mp4";
    video.appendChild(source);

    newsContainer.appendChild(newsImg);
    newsContainer.appendChild(returnContainer);
    newsContainer.appendChild(video)
    returnContainer.appendChild(returnImg);

    openAppFunction(newsIcon, newsContainer);

    returnContainer.addEventListener("click", () => {
        closeAppFunction(newsContainer, newsIcon);
    })
}