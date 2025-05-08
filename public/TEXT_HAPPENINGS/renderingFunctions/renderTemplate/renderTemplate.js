export function renderTemplate() {
    const wrapper = document.createElement("div");
    const personSpeakingWrapper = document.createElement("div");
    const personSpeakingImg = document.createElement("img");
    const textBubble = document.createElement("div");
    const textBubbleText = document.createElement("p");
    const arrowContainer = document.createElement("div");
    const arrowImg = document.createElement("img");

    wrapper.id = "wrapper";
    personSpeakingWrapper.id = "personSpeakingWrapper";
    personSpeakingImg.id = "personSpeakingImg";
    textBubble.id = "textBubble";
    textBubbleText.id = "textBubbleText";
    arrowContainer.id = "arrowContainer";
    arrowImg.id = "arrowImg";
    arrowImg.src = "./icons/arrow.svg";

    document.body.appendChild(wrapper); 
    wrapper.appendChild(textBubble);
    wrapper.appendChild(personSpeakingWrapper);
    wrapper.appendChild(arrowContainer);
    personSpeakingWrapper.appendChild(personSpeakingImg);
    textBubble.appendChild(textBubbleText);
    arrowContainer.appendChild(arrowImg);
}