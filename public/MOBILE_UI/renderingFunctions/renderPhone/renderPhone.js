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
    
    timerElement.textContent = "00:10";
    nameElement.textContent = "Kerstin ❤️";
    
    imageOfCallerElement.src = "./../MOBILE_UI/images/Kerstin.jpg";
    soundIcon.src = "./../MOBILE_UI/icons/PhoneIcons/volume.png";
    facetimeIcon.src = "./../MOBILE_UI/icons/phoneIcons/facetime-button.png";
    soundOffIcon.src = "./../MOBILE_UI/icons/phoneIcons/mute.png";
    addUserIcon.src = "./../MOBILE_UI/icons/phoneIcons/add-friend.png";
    endCallIcon.src = "./../MOBILE_UI/icons/phoneIcons/circle.png";
    keypadIcon.src = "./../MOBILE_UI/icons/phoneIcons/dial.png";
    audio.src = ""; 
    // audio.load(); aktivera igen när en ljudfil finns
    
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

    // setTimeout(() => {
    //     audio.play().catch((error) => {
    //         console.error("Autoplay misslyckades", error);
    //     })
    // }, 2000);
    // kommentera tillbaka när en ljudfil finns

    endCallIcon.addEventListener("click", () => {
        setTimeout(() => {
            closeAppFunction(phoneDiv, phoneIcon);
        }, 30);
    })

}