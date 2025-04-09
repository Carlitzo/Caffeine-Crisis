export function openAppFunction(iconElement, appDiv) {
    
    const iconRect = iconElement.getBoundingClientRect();

    const relativeLeft = iconRect.left;
    const relativeTop = iconRect.top;

    appDiv.style.opacity = "0";

    appDiv.classList.add("app_animation");

    appDiv.style.position = "absolute";
    appDiv.style.left = `${relativeLeft}px`;
    appDiv.style.top = `${relativeTop}px`;
    appDiv.style.width = `${iconRect.width}px`;
    appDiv.style.height = `${iconRect.height}px`;

    document.body.appendChild(appDiv);

    if (appDiv.id === "notesDiv") {
        let header = document.getElementById("topContainer");
        header.style.color = "black";
    }

    if (appDiv.id === "mapsApp") {
        renderMap(appDiv);
    }

    setTimeout(() => {
        appDiv.style.opacity = "100";
        appDiv.style.left = "0px";
        appDiv.style.top = "0px";
        appDiv.style.width = "100vw";
        appDiv.style.height = "100vh";
    }, 20);

}