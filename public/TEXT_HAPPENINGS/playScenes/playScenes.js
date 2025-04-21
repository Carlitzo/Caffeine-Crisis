export function playScenes(sceneNumber, dialogueData) {

    const scene = dialogueData[sceneNumber.toString()];
    const textBubbleText = document.getElementById("textBubbleText");
    const speakerImg = document.getElementById("personSpeakingImg");
    const arrowContainer = document.getElementById("arrowContainer");

    let currentLine = 0;
    let isTyping = false;

    switch(sceneNumber) {
        case 1 :
        {
            const backgroundImage = document.getElementById("wrapper");
            backgroundImage.style.backgroundImage = `url("./../TEXT_HAPPENINGS/images/Niagara_johannes.jpeg")`;
        }
        case 2 :
        {
                
        }
        case 3 :
        {

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
        // speakerImg.src = characterImages[character] || "images/default.png";

        typeWriterEffect(line, textBubbleText);
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