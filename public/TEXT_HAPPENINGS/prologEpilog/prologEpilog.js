export function showProlog(onComplete) {
    // Skapa ett overlay-element
    const prologContainer = document.createElement("div");
    prologContainer.id = "prologContainer";
  
    const prologText = document.createElement("div");
    prologText.id = "prologText";
    prologText.innerText = `Olle Ollessons mamma har massiva skulder på Klarna. Som den översittande shopaholic Karin är pressar hon därför sin enda son Olle att jobba heltid på Espresso House – samtidigt som han pluggar heltid. Detta har lett till att Olle, som även lider av social ångest och återkommande utbrändhet, nu ligger efter i skolan. När han en vanlig tisdag eftermiddag kommer till jobbet upptäcker han till sin förundran att kafét är nedstängt. En konstig känsla sprider sig i Olle men han skakar av sig den. Han bestämmer sig istället för att åka in till skolan för att ta tag i det där kompletteringsamtalet han behöver ta tag i med läraren Johannes. På skolan är allt som vanligt… nästan.
    `;
  
    // Lägg till en knapp för att starta ljudet
    const startButton = document.createElement("button");
    startButton.innerText = "Starta Caffeine Crisisi";
    startButton.id = "startButton";
    document.body.appendChild(startButton);
  
    // Lyssna på knappen för att starta ljudet
    startButton.addEventListener("click", () => {
      // Skapa ljudet och spela upp det när användaren klickar
      const audioElement = new Audio("./sounds/prolog.mp3"); // Sätt rätt sökväg för ljudfilen
      audioElement.loop = true;
  
      // Spela upp ljudet när användaren har klickat på knappen
      audioElement.play().catch(err => {
        console.error("Ljudet kunde inte spelas:", err);
      });
  
      // Ta bort knappen när ljudet startar
      startButton.remove();
  
      // Lägg till prologtexten i DOM
      prologContainer.appendChild(prologText);
      document.body.appendChild(prologContainer);
  
      // Starta rullande animation
      prologText.animate([
        { transform: "translateY(100%)" },
        { transform: "translateY(-100%)" }
      ], {
        duration: 50000,
        easing: "linear"
      });
  
      // Ta bort efter 40 sekunder och stoppa ljudet
      setTimeout(() => {
        audioElement.pause(); // Stoppa ljudet
        audioElement.currentTime = 0; // Återställ ljudets position till början
        prologContainer.remove();
        if (onComplete) onComplete();
      }, 45000); // Stänger av efter 40 sekunder
    });
  }