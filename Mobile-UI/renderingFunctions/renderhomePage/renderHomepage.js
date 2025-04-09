export function renderHomepage() {
    document.body.innerHTML = `
        <header id="topContainer">
            <div id="timeIcon">12:14</div>
            <div id="iconContainer">
                <img src="icons/signal-white.png" id="signalIcon" alt="">5G
                <img src="icons/battery-white.png" id="" alt="batteryIcon" class="icon" class="battery">
            </div>
        </header>
        <main id="apps">
            <div class="appCard">
                <img src="icons/facetime.svg" id="phoneIcon" alt="" class="appIcon">
            </div>
            </div>
            <div class="appCard">
                <img src="icons/calender.svg" id="calenderIcon" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/mail.svg" id="mailIcon" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/clock.svg" id="clockIcon" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/photo-album.svg" id="photoAlbumIcon" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/camera.svg" id="cameraIcon" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/notes.svg" id="notesIcon" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/weather.svg" id="weatherIcon" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/app-store.svg" id="appStoreIcon" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/settings.svg" id="settingsIcon" alt="" class="appIcon">
            </div>
        </main>
        <footer id="bottomContainer">
            <div class="appCard">
                <img src="icons/phone.svg" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/safari.svg" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/messages.svg" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/maps.svg" alt="" class="appIcon">
            </div>
        </footer>
    `
}