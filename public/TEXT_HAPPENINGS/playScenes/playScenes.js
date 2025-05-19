import { updateSpeaker } from "./../updateSpeaker/updateSpeaker.js";

function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

export function playScenes(sceneNumber, dialogueData) {
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);

    const scene = dialogueData[sceneNumber.toString()];
    const textBubbleText = document.getElementById("textBubbleText");
    const speakerImg = document.getElementById("personSpeakingImg");
    const arrowRightContainer = document.getElementById("arrowRightContainer");
    const arrowLeftContainer = document.getElementById("arrowLeftContainer");
    const backgroundImage = document.getElementById("wrapper");

    let currentLine = 0;
    let isTyping = false;

    switch (sceneNumber) {
        case 1:
            backgroundImage.style.backgroundImage = `url("./../TEXT_HAPPENINGS/images/teachersroom.jpg")`;
            break;
        case 2:
            backgroundImage.style.backgroundImage = `url("./../TEXT_HAPPENINGS/images/thomas_4.jpg")`;
            break;
        case 3:
            backgroundImage.style.backgroundImage = `url("./../TEXT_HAPPENINGS/images/maria_kafe.jpg")`;
            break;
        case 4:
            backgroundImage.style.backgroundImage = `url("./../TEXT_HAPPENINGS/images/safespace_liten.jpg")`;
            break;
        case 5:
            backgroundImage.style.backgroundImage = `url("./../TEXT_HAPPENINGS/images/maxi.jpg")`;
            break;
        case 6:
            backgroundImage.style.backgroundImage = `url("./../TEXT_HAPPENINGS/images/fyr.jpg")`;
            break;
        case 7:
            backgroundImage.style.backgroundImage = `url("./../TEXT_HAPPENINGS/images/sprinkler_location.jpg")`;
            break;
    }

    function typeWriterEffect(text, element, speed = 30, onComplete) {
        let i = 0;
        element.textContent = "";
        isTyping = true;
        arrowRightContainer.style.pointerEvents = "none";

        const bubble = element.parentElement;
        bubble.style.height = "auto";

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                const scrollHeight = element.scrollHeight + 30;
                bubble.style.height = `${scrollHeight}px`;
                setTimeout(type, speed);
            } else {
                isTyping = false;
                arrowRightContainer.style.pointerEvents = "auto";
                if (onComplete) onComplete();
            }
        }
        type();
    }

    function showLine(index) {
        if (index === 0) {
            arrowLeftContainer.style.opacity = 0;
            arrowLeftContainer.style.pointerEvents = "none";
        } else {
            arrowLeftContainer.style.opacity = 1;
            arrowLeftContainer.style.pointerEvents = "auto";
        }

        if (index === scene.length - 1) {
            arrowRightContainer.style.opacity = 0;
            arrowRightContainer.style.pointerEvents = "none";
        }

        const { character, line } = scene[index];

        if (character === "Beskrivning") {
            textBubbleText.style.fontStyle = "italic";
            if (scene[index - 1] && scene[index - 1].character !== "Beskrivning") {
                const previousCharacter = scene[index - 1].character;
                updateSpeaker({ speakerImg: speakerImg, character: previousCharacter });
            }
        } else {
            textBubbleText.style.fontStyle = "normal";
            updateSpeaker({ speakerImg: speakerImg, character: character });
        }

        typeWriterEffect(line, textBubbleText);

        if (sceneNumber === 5 && index === 10) {
            arrowRightContainer.style.opacity = 0;
            
            const wrapper = document.getElementById("wrapper");
            const inputContainer = document.createElement("div");
            const inputField = document.createElement("input");
            const riddleContainer = document.createElement("div");
            const riddleText = document.createElement("p");
    
            inputContainer.id = "answerInputContainer";
            inputField.id = "answerInputField";
            riddleContainer.id = "riddleContainer";
            riddleText.id = "riddleText";
            inputField.type = "text";
            inputField.placeholder = "skriv ditt svar här...";
            riddleText.textContent = "Jag smyger in i kroppen och väcker cellerna. För mycket av mig kan få dig att darra som en zombie. Vad är jag?";
    
            wrapper.appendChild(riddleContainer);
            wrapper.appendChild(inputContainer);
            riddleContainer.appendChild(riddleText);
            inputContainer.appendChild(inputField);
    
            let correctAnswer = "kaffe";
            let correctAnswerTwo = "koffein";
    
            inputField.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    if (inputField.value.trim().toLowerCase() === correctAnswer.toLowerCase() || inputField.value.trim().toLowerCase() === correctAnswerTwo.toLowerCase()) {
                        inputContainer.remove();
                        riddleContainer.remove();
                        currentLine++;
                        showLine(currentLine);
                        arrowRightContainer.style.opacity = 1;
                    } else {
                        inputField.value = "";
                        inputField.placeholder = "Fel svar, försök igen...";
                    }
                }
            });
            return;
        }

        if (sceneNumber === 7 && index === 11) {
            arrowRightContainer.style.opacity = 0;

            const wrapper = document.getElementById("wrapper");
            const inputContainer = document.createElement("div");
            const inputField = document.createElement("input");
            const riddleContainer = document.createElement("div");
            const riddleText = document.createElement("p");

            inputContainer.id = "answerInputContainer";
            inputField.id = "answerInputField";
            riddleContainer.id = "riddleContainer";
            riddleText.id = "riddleText";
            inputField.type = "text";
            inputField.placeholder = "Skriv koden här...";
            riddleText.textContent = "Skriv koden nedan!";

            wrapper.appendChild(riddleContainer);
            wrapper.appendChild(inputContainer);
            riddleContainer.appendChild(riddleText);
            inputContainer.appendChild(inputField);

            const correctAnswer = "CA56IN3Z";

            inputField.addEventListener("keydown", (event) => {
                console.log(inputField.value)
                if (event.key === "Enter") {
                    if (inputField.value.trim().toUpperCase() === correctAnswer) {
                        inputContainer.remove();
                        riddleContainer.remove();
                        arrowRightContainer.style.opacity = 1;
                        localStorage.clear();
                        showEpilog();
                    } else {
                        inputField.value = "";
                        inputField.placeholder = "Fel svar, försök igen...";
                    }
                }
            });
            return;
        }

        if (sceneNumber === 4 && index === 10 || sceneNumber === 5 && index === 14 || sceneNumber === 6 && index === 11) {
            const phoneButton = document.createElement("button");
            phoneButton.id = "phoneButton";
            phoneButton.textContent = "Öppna Olles telefon";
            wrapper.appendChild(phoneButton);
            phoneButton.addEventListener("click", () => {
                window.location.href = "/";
            })
        }

    }

    arrowRightContainer.addEventListener("click", () => {
        if (!isTyping) {
            currentLine++;
            showLine(currentLine);
        }
    });

    arrowLeftContainer.addEventListener("click", () => {
        if (!isTyping && currentLine > 0) {
            currentLine--;
            showLine(currentLine);
            arrowRightContainer.style.opacity = 1;
        }
    });

    showLine(currentLine);
}

function showEpilog() {
    const audioElement = new Audio("./sounds/epilog.mp3");
    audioElement.loop = true;

    audioElement.play().catch((err) => {
        console.error("Ljudet kunde inte spelas:", err);
    });

    const epilogContainer = document.createElement("div");
    epilogContainer.id = "epilogContainer";

    const epilogText = document.createElement("div");
    epilogText.id = "epilogText";
    epilogText.innerText = `
        Efteråt återgår allting till det normala… nästan. Lärarna dricker lika mycket kaffe som förut, men har numera alltid med sig koffeintabletter i fickan för att vara säkra på att de klarar sig ifall en liknande kris skulle uppdagas. På skolan har man möten om hur krisberedskapen kan ökas. Eftersom risken att kaffet blir alltför dyrt eller tar slut igen ständigt finns i bakgrunden har man bestämt sig för att köpa upp ett reservlager som förvaras på hemlig ort som endast Olle har koordinaterna till. Det blev jäkligt dyrt med tanke på att ett paket kaffe kostar 100 SEK just nu, men det är bra att skattepengar finns! 
        Olle, en aning traumatiserad av både kaffe och skola, avskriver sig ansvaret för sin mammas shoppingmissbruk och Klarna-skulder. Han bestämmer sig en gång för alla att sluta vara en medberoende underdog, börjar plugga på distans för att slippa töntar som Mobbar-Albin och tar ÄNTLIGEN tag i sin relation med Kerstin. De bestämmer sig för att lämna Sverige och Danmark och tar första bästa flyg mot Brasilien för att hjälpa till med den allt tuffare situationen inom kaffeodling. Nu ska bara Olle hitta ett sätt att rädda klimatet också så kaffebönorna växer sig stora och starka och Sverige får fortsatt tillgång till sitt förbannade kaffe. Ingen pallar bli biten och klöst på och ingen pallar förhöjda havsnivåer och att golfströmmen ska lägga av heller. Snippsnappsluuut.
    `;

    epilogContainer.appendChild(epilogText);
    document.body.appendChild(epilogContainer);

    document.body.style.backgroundColor = "black"; 

    epilogText.animate([
        { transform: "translateY(100%)" },
        { transform: "translateY(-100%)" }
    ], {
        duration: 50000,
        easing: "linear"
    });

    const endingImage = document.createElement("div");
    endingImage.id = "endingImage";
    document.body.appendChild(endingImage);

    setTimeout(() => {
        endingImage.classList.add("fade-in");
    }, 42000);

    setTimeout(() => {
        epilogText.style.display = "none";
    }, 47000);
}