export function updateSpeaker({speakerImg, character}) {
    console.log(speakerImg.src)
    // Vänta innan du byter bild och ID
    setTimeout(() => {
        const newId = `personSpeakingImg${character}`;
        if (speakerImg) {
            speakerImg.style.opacity = 0;
            const newSrc = `./images/${character}.png`;
            
            speakerImg.src = newSrc;
            speakerImg.id = newId;
        }
        
        setTimeout(() => {
            if (speakerImg) {
                speakerImg.style.opacity = 1;
            }
        }, 100);
        }, 200);
}