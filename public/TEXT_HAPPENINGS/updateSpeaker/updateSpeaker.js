let currentSpeaker = '';

export function updateSpeaker({speakerImg, character}) {
    if (currentSpeaker === character) {
        return;
    }
    setTimeout(() => {
        const newId = `personSpeakingImg${character}`;
        
        if (speakerImg) {
            speakerImg.style.opacity = 0;

            setTimeout(() => {
                const newSrc = `./images/${character}.png`;
                speakerImg.src = newSrc;
                speakerImg.id = newId;
    
                setTimeout(() => {
                    speakerImg.style.opacity = 1;
                }, 100);
            }, 300);
        }
        
        currentSpeaker = character;
        }, 200);
}