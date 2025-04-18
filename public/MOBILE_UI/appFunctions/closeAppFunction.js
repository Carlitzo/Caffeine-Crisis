export function closeAppFunction(appDiv, iconElement) {
    const iconRect = iconElement.getBoundingClientRect();
    const header = document.getElementById("topContainer");
    const signalIcon = document.getElementById("signalIcon");
    const batteryIcon = document.getElementById("batteryIcon");

    const relativeLeft = iconRect.left;
    const relativeTop = iconRect.top;

    appDiv.style.left = `${relativeLeft}px`;
    appDiv.style.top = `${relativeTop}px`;
    appDiv.style.width = `${iconRect.width}px`;
    appDiv.style.height = `${iconRect.height}px`;

    header.style.color = "white";
    signalIcon.src = "./../MOBILE_UI/icons/signal-white.png";
    batteryIcon.src = "./../MOBILE_UI/icons/battery-white.png";
    
    setTimeout(() => {
        appDiv.remove();
    }, 100)
}