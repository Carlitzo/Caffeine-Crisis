export function renderTextMessage(message) {
    const existingPopup = document.getElementById("smsPopup");
    if (existingPopup) existingPopup.remove();
    
    const popup = document.createElement("div");
    popup.id = "smsPopup";
    popup.classList.add("show");

    popup.innerHTML = `
        <div id="imgContainer">
            <img id="kerstinImgMessage" src="./../MOBILE_UI/images/Kerstin.jpg">
            <img id="textIconPopUp" src="./../MOBILE_UI/icons/messages.svg">
        </div>
        <div id="messageContainer">
            <h4> Message </h4>
            <p>${message}</p>
        </div>
    `;

    document.body.appendChild(popup);

    const smsSound = new Audio(`./../MOBILE_UI/sounds/notification.mp3`);
    smsSound.play();

    setTimeout(() => {
        popup.classList.remove("show");
        setTimeout(() => {popup.remove()}, 300);
    }, 7000)
}