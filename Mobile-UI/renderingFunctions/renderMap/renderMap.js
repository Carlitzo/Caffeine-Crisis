import { openAppFunction } from "../../appFunctions/openAppFunction.js";
import { closeAppFunction } from "../../appFunctions/closeAppFunction.js";

export function renderMap(mapIcon) {
    const mapImg = document.createElement("img");
    const mapReturnButton = document.createElement("button");
    mapImg.src = "./images/karta.jpg";
    mapImg.id = "mapImg";
    mapReturnButton.id = "mapReturnButton";
    mapReturnButton.textContent = "X";

    mapImg.appendChild(mapReturnButton);

    openAppFunction(mapIcon, mapImg);

    mapReturnButton.addEventListener("click", () => {
        closeAppFunction(mapImg, mapIcon);
    })
}