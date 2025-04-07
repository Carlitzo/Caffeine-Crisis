export function renderHomepage() {
    document.body.innerHTML = `
        <header id="topContainer">
            <div id="timeIcon">12:14</div>
            <div id="iconContainer">
                <img src="icons/signal.png" id="signalIcon" alt="">5G
                <img src="icons/battery.png" id="" alt="batteryIcon" class="icon" class="battery">
            </div>
        </header>
        <main id="apps">
            <div class="appCard">
                <img src="icons/phone.svg" id="phoneIcon" alt="" class="appIcon">
            </div>
            </div>
            <div class="appCard">
                <img src="icons/camera.svg" id="cameraIcon" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/messages.svg" id="messagesIcon" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/notes.svg" id="notesIcon" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/maps.svg" id="mapsIcon" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/instagram.svg" id="instagramIcon" alt="" class="appIcon">
            </div>
        </main>
        <footer id="bottomContainer">
            <div class="appCard">
                <img src="icons/phone.svg" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/messages.svg" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/camera.svg" alt="" class="appIcon">
            </div>
            <div class="appCard">
                <img src="icons/maps.svg" alt="" class="appIcon">
            </div>
        </footer>
    `
}