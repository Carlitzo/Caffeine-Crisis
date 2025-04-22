export function updateSpeaker(speakerImg, character) {
    // Sänk opacitet för fade-out
    speakerImg.style.opacity = 0;

    // Vänta innan du byter bild och ID
    setTimeout(() => {
    const newId = `personSpeakingImg${character}`;
    const newSrc = `./images/${character}.png`;

    speakerImg.src = newSrc;
    speakerImg.id = newId;

    setTimeout(() => {
        speakerImg.style.opacity = 1;
    }, 100);
    }, 200);
}