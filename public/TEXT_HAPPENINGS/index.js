import { renderTemplate } from "./renderingFunctions/renderTemplate/renderTemplate.js";
import { playScenes } from "./playScenes/playScenes.js";
import { dialogueData } from "./dialogueData/dialogueData.js";

renderTemplate();

const urlParams = new URLSearchParams(window.location.search);
const sceneParam = urlParams.get("scene");

// Exempel: Ladda rätt scen beroende på scene-param
if (sceneParam) {
  const sceneNumber = parseInt(sceneParam, 10);
  playScenes(sceneNumber, dialogueData);
} else {
  console.warn("Ingen scene GET-param hittades.");
}