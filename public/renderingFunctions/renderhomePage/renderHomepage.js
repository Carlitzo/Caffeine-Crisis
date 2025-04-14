export function renderHomepage() {
    document.body.innerHTML = `
        <header id="topContainer">
            <div id="timeIcon">12:14</div>
            <div id="iconContainer">
                <img src="icons/signal-white.png" id="signalIcon" alt="">5G
                <img src="icons/battery-white.png" id="batteryIcon" alt="batteryIcon" class="icon" class="battery">
            </div>
        </header>
        <main id="apps">
            <div class="appCard">
                <img src="icons/facetime.svg" alt="" class="appIcon">
                <p class="appText">Telefon</p>
            </div>
            </div>
            <div class="appCard">
                <img src="icons/calender.svg" id="calenderIcon" alt="" class="appIcon">
                <p class="appText">Kalender</p>
            </div>
            <div class="appCard">
                <img src="icons/mail.svg" id="mailIcon" alt="" class="appIcon">
                <p class="appText">Mail</p>
            </div>
            <div class="appCard">
                <img src="icons/clock.svg" id="clockIcon" class="appIcon">
                <p class="appText">Klocka</p>
            </div>
            <div class="appCard">
                <img src="icons/photo-album.svg" id="photoAlbumIcon" alt="" class="appIcon">
                <p class="appText">Bilder</p>
            </div>
            <div class="appCard">
                <img src="icons/camera.svg" id="cameraIcon" alt="" class="appIcon">
                <p class="appText">Kamera</p>
            </div>
            <div class="appCard">
                <img src="icons/notes.svg" id="notesIcon" alt="" class="appIcon">
                <p class="appText">Anteckningar</p>
            </div>
            <div class="appCard">
                <img src="icons/weather.svg" id="weatherIcon" alt="" class="appIcon">
                <p class="appText">Väder</p>
            </div>
            <div class="appCard">
                <img src="icons/app-store.svg" id="appStoreIcon" alt="" class="appIcon">
                <p class="appText">App Store</p>
            </div>
            <div class="appCard">
                <img src="icons/settings.svg" id="settingsIcon" alt="" class="appIcon">
                <p class="appText">Settings</p>
            </div>
            <div class="appCard">
                <img src="icons/instagram.svg" id="instagramIcon" alt="" class="appIcon">
                <p class="appText">Instagram</p>
            </div>
        </main>
        <footer id="bottomContainer">
            <div class="appCard">
                <img src="icons/phone.svg" id="phoneIcon" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/safari.svg" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/messages.svg" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/maps.svg" id="mapsIcon" alt="" class="appIcon">
            </div>
        </footer>
    `
}