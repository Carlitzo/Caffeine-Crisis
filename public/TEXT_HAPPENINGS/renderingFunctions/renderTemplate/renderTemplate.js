export function renderTemplate() {
    const wrapper = document.createElement("div");
    const personSpeakingWrapper = document.createElement("div");
    const personSpeakingImg = document.createElement("img");
    const textBubble = document.createElement("div");
    const textBubbleText = document.createElement("p");
    const arrowRightContainer = document.createElement("div");
    const arrowLeftContainer = document.createElement("div");
    const arrowImg = document.createElement("img");
    const arrowLeftImg = document.createElement("img");

    wrapper.id = "wrapper";
    personSpeakingWrapper.id = "personSpeakingWrapper";
    personSpeakingImg.id = "personSpeakingImg";
    textBubble.id = "textBubble";
    textBubbleText.id = "textBubbleText";
    arrowRightContainer.id = "arrowRightContainer";
    arrowLeftContainer.id = "arrowLeftContainer";
    arrowImg.id = "arrowImg";
    arrowImg.src = "./icons/arrow.svg";
    arrowLeftImg.id = "arrowLeftImg";
    arrowLeftImg.src = "./icons/arrow.svg";

    document.body.appendChild(wrapper); 
    wrapper.appendChild(textBubble);
    wrapper.appendChild(personSpeakingWrapper);
    wrapper.appendChild(arrowRightContainer);
    wrapper.appendChild(arrowLeftContainer);
    personSpeakingWrapper.appendChild(personSpeakingImg);
    textBubble.appendChild(textBubbleText);
    arrowRightContainer.appendChild(arrowImg);
    arrowLeftContainer.appendChild(arrowLeftImg);
}