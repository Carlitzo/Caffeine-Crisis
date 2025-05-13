import { openAppFunction } from "../../appFunctions/openAppFunction.js";
import { closeAppFunction } from "../../appFunctions/closeAppFunction.js";
import { getPlayerState, updateTask } from "../../appFunctions/gameState.js";

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
    returnImageArrow.src = "./../MOBILE_UI/icons/arrow-notes.png";
    shareImgage.id = "shareImg";
    shareImgage.src = "./../MOBILE_UI/icons/shareIcon.png";
    moreIcon.id = "moreIcon";
    moreIcon.src = "./../MOBILE_UI/icons/moreIcon.png";

    const tasks = getPlayerState().tasks;
    const taskKeys = Object.keys(tasks);
    const tasksDescriptions = ["Fixa ett kaffefilter i Orkanenbiblioteket vid anslagstavlan.", "Träffa Ica-Maxi-Göran och fråga om kaffeföremål.", "Hitta en hundtratt vid hundrastgården i Varvsparken.", "Skruva av glaskupan på en lyktstolpe i Skateparken i Stapelbäddsparken.", "Möta Kerstin och ta emot kaffebönor efter att alla föremål är samlade."];
    const tasksContainer = document.createElement("div");
    tasksContainer.id = "tasksContainer";

    for (let i = 0; i < tasksDescriptions.length; i++) {
        const taskKey = taskKeys[i];
        const isChecked = tasks[taskKey];

        const taskDiv = document.createElement("div");
        taskDiv.className = "taskContainer";
        taskDiv.id = `taskContainer${i}`;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `checkbox${i + 1}`;
        checkbox.checked = isChecked;

        checkbox.addEventListener("change", () => {
            updateTask(taskKey, checkbox.checked);
        });

        const label = document.createElement("p");
        label.textContent = tasksDescriptions[i];

        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(label);
        tasksContainer.appendChild(taskDiv);
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