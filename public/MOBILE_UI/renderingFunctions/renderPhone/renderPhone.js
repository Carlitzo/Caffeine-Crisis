import { openAppFunction } from "../../appFunctions/openAppFunction.js";
import { closeAppFunction } from "../../appFunctions/closeAppFunction.js";

export function renderPhone(phoneIcon) {

    const phoneDiv = document.createElement("div");
    const phoneWrapper = document.createElement("div");
    const timerAndNameContainer = document.createElement("div");
    const timerElement = document.createElement("div");
    const nameElement = document.createElement("p");
    const imageOfCallerElement = document.createElement("img");
    const selectionWrapper = document.createElement("div");
    const soundIcon = document.createElement("img");
    const facetimeIcon = document.createElement("img");
    const soundOffIcon = document.createElement("img");
    const addUserIcon = document.createElement("img");
    const endCallIcon = document.createElement("img");
    const keypadIcon = document.createElement("img");
    const audio = document.createElement("audio");

    phoneDiv.id = "phoneDiv";
    phoneWrapper.id = "phoneWrapper";
    timerAndNameContainer.id = "timerAndNameContainer";
    timerElement.id = "timerElement";
    nameElement.id = "nameElement";
    imageOfCallerElement.id = "imageOfCallerElement";
    selectionWrapper.id = "selectionWrapper";
    soundIcon.id = "soundIcon";
    facetimeIcon.id = "facetimeIcon";
    soundOffIcon.id = "soundOffIcon";
    addUserIcon.id = "addUserIcon";
    endCallIcon.id = "endCallIcon";
    keypadIcon.id = "keypadIcon";
    audio.id = "audio";

    soundIcon.classList.add("phoneSelectionIcon");
    facetimeIcon.classList.add("phoneSelectionIcon");
    soundOffIcon.classList.add("phoneSelectionIcon");
    addUserIcon.classList.add("phoneSelectionIcon");
    endCallIcon.classList.add("phoneSelectionIcon");
    keypadIcon.classList.add("phoneSelectionIcon");

    timerElement.textContent = "00:00"; // Startar från 0
    nameElement.textContent = "Kerstin ❤️";

    imageOfCallerElement.src = "./../MOBILE_UI/images/Kerstin.jpg";
    soundIcon.src = "./../MOBILE_UI/icons/PhoneIcons/volume.png";
    facetimeIcon.src = "./../MOBILE_UI/icons/PhoneIcons/facetime-button.png";
    soundOffIcon.src = "./../MOBILE_UI/icons/PhoneIcons/mute.png";
    addUserIcon.src = "./../MOBILE_UI/icons/PhoneIcons/add-friend.png";
    endCallIcon.src = "./../MOBILE_UI/icons/PhoneIcons/circle.png";
    keypadIcon.src = "./../MOBILE_UI/icons/PhoneIcons/dial.png";
    audio.src = "./../MOBILE_UI/sounds/KerstinOlleMobile.mp3";

    phoneDiv.appendChild(phoneWrapper);
    phoneDiv.appendChild(audio);
    phoneWrapper.appendChild(timerAndNameContainer);
    phoneWrapper.appendChild(imageOfCallerElement);
    phoneWrapper.appendChild(selectionWrapper);
    timerAndNameContainer.appendChild(timerElement);
    timerAndNameContainer.appendChild(nameElement);

    const selectionIcons = [soundIcon, facetimeIcon, soundOffIcon, addUserIcon, endCallIcon, keypadIcon];
    const iconTexts = ["Ljud", "Facetime", "Ljud av", "Lägg till", "Avsluta", "Knappsats"];
    const selectionIconWrappers = [];

    for (let i = 0; i < selectionIcons.length; i++) {
        let iconWrapper = document.createElement("div");
        let iconWrapperWrapper = document.createElement("div");
        let iconText = document.createElement("p");

        iconWrapper.id = `iconWrapper${i + 1}`;
        iconWrapperWrapper.id = `iconWrapperWrapper${i + 1}`;
        iconText.id = `iconText${i + 1}`;
        iconText.textContent = iconTexts[i];

        iconWrapperWrapper.appendChild(selectionIcons[i]);
        iconWrapper.appendChild(iconWrapperWrapper);
        iconWrapper.appendChild(iconText);

        selectionIconWrappers[i] = iconWrapper;
    }

    for (let iconWrapper of selectionIconWrappers) {
        selectionWrapper.appendChild(iconWrapper);
    }

    openAppFunction(phoneIcon, phoneDiv);

    // === Enkel timerfunktion ===
    let timerInterval;
    let elapsedSeconds = 0;
    const maxDuration = 106; // 1 minut och 46 sekunder

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }

    function startSimpleTimer() {
        timerElement.textContent = formatTime(elapsedSeconds);
        timerInterval = setInterval(() => {
            elapsedSeconds++;
            timerElement.textContent = formatTime(elapsedSeconds);
            if (elapsedSeconds >= maxDuration) {
                clearInterval(timerInterval);
            }
        }, 1000);
    }

    audio.play().then(() => {
        startSimpleTimer();
    }).catch((error) => {
        console.error("Autoplay misslyckades", error);
    });

    endCallIcon.addEventListener("click", () => {
        audio.pause();
        audio.currentTime = 0;
        clearInterval(timerInterval);
        setTimeout(() => {
            closeAppFunction(phoneDiv, phoneIcon);
        }, 30);
    });
}
