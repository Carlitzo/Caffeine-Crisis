export function showProlog(onComplete) {
    // Skapa en container för startskärmen
    const startGame = document.createElement("div");
    startGame.id = "startGame";
  
    // Skapa knappen
    const startButton = document.createElement("button");
    startButton.innerText = "Starta Caffeine Crisis";
    startButton.id = "startButton";
  
    // Lägg knappen i startskärmen
    startGame.appendChild(startButton);
    document.body.appendChild(startGame);
  
    // Klick-event
    startButton.addEventListener("click", () => {
      const audioElement = new Audio("./sounds/prolog.mp3");
      audioElement.loop = true;
  
      audioElement.play().catch(err => {
        console.error("Ljudet kunde inte spelas:", err);
      });
  
      // Ta bort startskärmen
      startGame.remove();
  
      // Skapa prolog-overlay
      const prologContainer = document.createElement("div");
      prologContainer.id = "prologContainer";
  
      const prologText = document.createElement("div");
      prologText.id = "prologText";
      prologText.innerText = `Olle Ollessons mamma har massiva skulder på Klarna. Som den översittande shopaholic Karin är pressar hon därför sin enda son Olle att jobba heltid på Espresso House – samtidigt som han pluggar heltid. Detta har lett till att Olle, som även lider av social ångest och återkommande utbrändhet, nu ligger efter i skolan. När han en vanlig tisdag eftermiddag kommer till jobbet upptäcker han till sin förundran att kafét är nedstängt. En konstig känsla sprider sig i Olle men han skakar av sig den. Han bestämmer sig istället för att åka in till skolan för att ha det där kompletteringsamtalet med sin läraren Johannes. På skolan är allt som vanligt… nästan.`;
  
      prologContainer.appendChild(prologText);
      document.body.appendChild(prologContainer);
  
      prologText.animate([
        { transform: "translateY(100%)" },
        { transform: "translateY(-100%)" }
      ], {
        duration: 50000,
        easing: "linear"
      });
  
      setTimeout(() => {
        audioElement.pause();
        audioElement.currentTime = 0;
        prologContainer.remove();
        if (onComplete) onComplete();
      }, 47000);
    });
  }