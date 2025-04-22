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
    `;

    // Lägg till toast-element i DOM
    document.body.insertAdjacentHTML('beforeend', `
        <div id="notificationToast" class="hidden">
            <p id="toastMessage">Appen är inte tillgänglig.</p>
        </div>
    `);

    // Toast-funktion
    function showToast(message) {
        const toast = document.getElementById("notificationToast");
        const toastMsg = document.getElementById("toastMessage");

        toastMsg.textContent = message;
        toast.classList.remove("hidden");

        setTimeout(() => {
            toast.classList.add("show");
        }, 10);

        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => {
                toast.classList.add("hidden");
            }, 400);
        }, 3000);
    }

    // Lista på appar som INTE ska kunna klickas
    const disabledAppSelectors = [
        "facetime.svg", "calender.svg", "mail.svg", "clock.svg", 
        "photo-album.svg", "weather.svg", "calculator.svg", 
        "app-store.svg", "settings.svg", "tiktok.svg", 
        "safari.svg"
    ];

    // Sätt click-event för inaktiva appar
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