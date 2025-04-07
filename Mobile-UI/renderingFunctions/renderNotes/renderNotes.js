
import { openAppFunction } from "../../appFunctions/openAppFunction.js";
import { closeAppFunction } from "../../appFunctions/closeAppFunction.js";

export function renderNotes(notesIcon) {

    const notesDiv = document.createElement("div");
    const notesReturnButton = document.createElement("button");
    const notesHeader = document.createElement("p");
    notesDiv.id = "notesDiv";
    notesReturnButton.id = "notesReturnButton";
    notesReturnButton.textContent = "< Anteckningar";
    notesHeader.id = "notesHeader";
    notesHeader.textContent = "Samlade saker";

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

    notesDiv.appendChild(notesReturnButton);
    notesDiv.appendChild(notesHeader);
    notesDiv.appendChild(tasksContainer);

    openAppFunction(notesIcon, notesDiv);

    notesReturnButton.addEventListener("click", () => {
        closeAppFunction(notesDiv, notesIcon);
    })
}