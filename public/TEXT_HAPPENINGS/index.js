import { renderTemplate } from "./renderingFunctions/renderTemplate/renderTemplate.js";
import { playScenes } from "./playScenes/playScenes.js";
import { dialogueData } from "./dialogueData/dialogueData.js";
import { showProlog } from "./prologEpilog/prologEpilog.js";

const urlParams = new URLSearchParams(window.location.search);
const sceneParam = parseInt(urlParams.get("scene"), 10);

if (sceneParam === 1) {
  showProlog(() => {
    renderTemplate();
    playScenes(1, dialogueData);
  });
} else if (sceneParam) {
  renderTemplate();
  playScenes(sceneParam, dialogueData);
} else {
  console.warn("Ingen scene GET-param hittades.");
}

function setRealVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--real-vh', `${vh}px`);
}

setRealVh();

window.addEventListener('resize', setRealVh);
