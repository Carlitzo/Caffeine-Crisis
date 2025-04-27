export function renderHomepage() {
    document.body.innerHTML = `
        <header id="topContainer">
            <div id="timeIcon">12:14</div>
            <div id="iconContainer">
                <img src="./../MOBILE_UI/icons/signal-white.png" id="signalIcon" alt="">5G
                <img src="./../MOBILE_UI/icons/battery-white.png" id="batteryIcon" alt="batteryIcon" class="icon battery">
            </div>
        </header>

        <main id="apps">
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/facetime.svg" alt="" class="appIcon">
                <p class="appText">FaceTime</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/calender.svg" alt="" class="appIcon">
                <p class="appText">Kalender</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/mail.svg" alt="" class="appIcon">
                <p class="appText">Mail</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/clock.svg" class="appIcon">
                <p class="appText">Klocka</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/photo-album.svg" alt="" class="appIcon">
                <p class="appText">Bilder</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/camera.svg" id="cameraIcon" alt="" class="appIcon">
                <p class="appText">Kamera</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/notes.svg" id="notesIcon" alt="" class="appIcon">
                <p class="appText">Anteckningar</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/weather.svg" id="weatherIcon" alt="" class="appIcon">
                <p class="appText">Väder</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/settings.svg" id="settingsIcon" alt="" class="appIcon">
                <p class="appText">Inställningar</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/calculator.svg" id="calculatorIcon" alt="" class="appIcon">
                <p class="appText">Miniräknare</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/app-store.svg" id="appStoreIcon" alt="" class="appIcon">
                <p class="appText">App Store</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/instagram.svg" id="instagramIcon" alt="" class="appIcon">
                <p class="appText">Instagram</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/tiktok.svg" id="tiktokIcon" alt="" class="appIcon">
                <p class="appText">Tiktok</p>
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/youtube.png" id="youtubeIcon" alt="" class="appIcon">
                <p class="appText">Youtube</p>
            </div>
        </main>

        <footer id="bottomContainer">
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/phone.svg" id="phoneIcon" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/safari.svg" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/messages.svg" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="./../MOBILE_UI/icons/maps.svg" id="mapsIcon" alt="" class="appIcon">
            </div>
        </footer>

        <!-- Toast-container + ljud -->
        <div id="toastContainer"></div>
        <audio id="toastSound" src="./../MOBILE_UI/sounds/notification.mp3" preload="auto"></audio>
    `;

    // 🔔 Toast-funktion
    function showToast(message) {
        const container = document.getElementById("toastContainer");
        const sound = document.getElementById("toastSound");

        // Skapa unik toast
        const toast = document.createElement("div");
        toast.className = "notificationToast show";
        toast.innerHTML = `<p>${message}</p>`;
        container.prepend(toast); // Ny notis läggs överst

        // Spela ljud
        if (sound) {
            sound.currentTime = 0;
            sound.play();
        }

        // Ta bort toast efter tid
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 3000);
    }

    // 🛑 Appar som INTE kan klickas
    const disabledAppSelectors = [
        "facetime.svg", "calender.svg", "mail.svg", "clock.svg", 
        "photo-album.svg", "weather.svg", "calculator.svg", 
        "app-store.svg", "settings.svg", "tiktok.svg", 
        "safari.svg"
    ];

    // ⚙️ Lägg till eventlisteners
    document.querySelectorAll('.appCard').forEach(app => {
        const img = app.querySelector('img');
        if (img) {
            const src = img.getAttribute('src');
            if (disabledAppSelectors.some(disabled => src.includes(disabled))) {
                app.addEventListener('click', () => {
                    const appName = app.querySelector('.appText')?.textContent || "Appen";
                    showToast(`${appName} är inte tillgänglig.`);
                });
            }
        }
    });
}