
import { openAppFunction } from "../../appFunctions/openAppFunction.js";
import { closeAppFunction } from "../../appFunctions/closeAppFunction.js";

export function renderNotes(notesIcon) {

    const notesDiv = document.createElement("div");
    const notesDate = document.createElement("p");
    const notesReturnText = document.createElement("p");
    const notesHeader = document.createElement("p");
    const returnContainer = document.createElement("div");
    const returnContainerLeft = document.createElement("div");
    const returnImageArrow = document.createElement("img");
    const shareImgage = document.createElement("img");
    const moreIcon = document.createElement("img");
    notesDiv.id = "notesDiv";
    notesDate.id ="notesDate";
    notesDate.textContent = "13 April 2025 17:39";
    notesReturnText.id = "notesReturnButton";
    notesReturnText.textContent = "Anteckningar";
    notesHeader.id = "notesHeader";
    notesHeader.textContent = "Samlade saker";
    returnContainer.id = "returnContainer";
    returnContainerLeft.id = "returnContainerLeft";
    returnImageArrow.id = "returnImageArrow";
    returnImageArrow.src = "./icons/arrow-notes.png";
    shareImgage.id = "shareImg";
    shareImgage.src = "./icons/shareIcon.png";
    moreIcon.id = "moreIcon";
    moreIcon.src = "./icons/moreIcon.png";

    const tasks = ["Hämta kaffefilter från Orkanen", "Prata med Göran om kaffemått", "Gå till varvsparken", "Gå till agilitybanan", "Ta emot kaffebönor av Kerstin"];
    const tasksContainer = document.createElement("div");
    tasksContainer.id = "tasksContainer";

    for (let i = 0; i < tasks.length; i++) {
        tasksContainer.innerHTML += `
        <div id="taskContainer${i}" class="taskContainer">
        <input type="checkbox" id="checkbox${i + 1}"/>
        <p> ${tasks[i]}</p>
        </div>
        `;
    }

    notesDiv.appendChild(notesDate);
    notesDiv.appendChild(notesHeader);
    notesDiv.appendChild(tasksContainer);
    notesDiv.appendChild(returnContainer);
    returnContainerLeft.appendChild(returnImageArrow);
    returnContainerLeft.appendChild(notesReturnText);
    returnContainer.appendChild(returnContainerLeft);
    returnContainer.appendChild(shareImgage);
    returnContainer.appendChild(moreIcon);


    openAppFunction(notesIcon, notesDiv);

    returnContainerLeft.addEventListener("click", () => {
        closeAppFunction(notesDiv, notesIcon);
    })
}