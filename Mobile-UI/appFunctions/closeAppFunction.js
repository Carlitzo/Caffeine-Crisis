export function closeAppFunction(appDiv, iconElement) {
    const iconRect = iconElement.getBoundingClientRect();

    const relativeLeft = iconRect.left;
    const relativeTop = iconRect.top;

    appDiv.style.left = `${relativeLeft}px`;
    appDiv.style.top = `${relativeTop}px`;
    appDiv.style.width = `${iconRect.width}px`;
    appDiv.style.height = `${iconRect.height}px`;

    if (appDiv.id === "notesDiv") {
        let header = document.getElementById("topContainer");
        header.style.color = "white";
    }
    
    setTimeout(() => {
        appDiv.remove();
    }, 100)
}