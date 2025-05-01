import { updateSpeaker } from "./../updateSpeaker/updateSpeaker.js";

export function playScenes(sceneNumber, dialogueData) {

    const scene = dialogueData[sceneNumber.toString()];
    const textBubbleText = document.getElementById("textBubbleText");
    const speakerImg = document.getElementById("personSpeakingImg");
    const arrowContainer = document.getElementById("arrowContainer");
    const backgroundImage = document.getElementById("wrapper");

    let currentLine = 0;
    let isTyping = false;

    switch(sceneNumber) {
        case 1 :
        {
            backgroundImage.style.backgroundImage = `url("./../TEXT_HAPPENINGS/images/Teachersroom.jpg")`;
            break;
        }
        case 2 :
        {
            backgroundImage.style.backgroundImage = `url("./../TEXT_HAPPENINGS/images/thomas_4.jpg")`;
            break;
        }
        case 3 :
        {
            backgroundImage.style.backgroundImage = `url("./../TEXT_HAPPENINGS/images/maria_kafe.jpg")`;
            break;
        }
        case 4:
        {
            break;
        }
        case 5:
        {
            backgroundImage.style.backgroundImage = `url("./../TEXT_HAPPENINGS/images/maxi.jpg")`;
            break;
        }
        case 6:
        {
            break;
        }
        case 7:
        {
            break;
        }
        
    }

    function typeWriterEffect(text, element, speed = 30, onComplete) {
        let i = 0;
        element.textContent = "";
        isTyping = true;
        arrowContainer.style.pointerEvents = "none"; // blockera klick under skrivning

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                isTyping = false;
                arrowContainer.style.pointerEvents = "auto"; // tillåt klick
                if (onComplete) onComplete();
            }
        }

        type();
    }

    function showLine(index) {
        if (index >= scene.length) {
        arrowContainer.style.pointerEvents = "none";
        return;
        }

        const { character, line } = scene[index];

        if (character === "Beskrivning") {
            textBubbleText.style.fontStyle = "italic";
        } else {
            textBubbleText.style.fontStyle = "normal";
            updateSpeaker({ speakerImg: speakerImg, character: character });
        }

        typeWriterEffect(line, textBubbleText);

        if (sceneNumber === 5 && index === 10) {
            const wrapper = document.getElementById("wrapper");
            const inputContainer = document.createElement("div");
            const inputField = document.createElement("input");

            inputContainer.id = "answerInputContainer";
            inputField.id = "answerInputField";
            inputField.type = "text";
            inputField.placeholder = "skriv ditt svar här...";

            wrapper.appendChild(inputContainer);
            inputContainer.appendChild(inputField);

            let correctAnswer = "kaffe";
            
            inputField.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    if (inputField.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
                        inputContainer.remove();
                        currentLine++;
                        showLine(currentLine);
                    } else {
                        inputField.value = "";
                        inputField.placeholder = "Fel svar, försök igen...";
                    }
                }
            });
            return;
        }
    }

    // Sätt upp klick-event
    arrowContainer.addEventListener("click", () => {
        if (!isTyping) {
        currentLine++;
        showLine(currentLine);
        }
    });

    // Visa första raden
    showLine(currentLine);
}