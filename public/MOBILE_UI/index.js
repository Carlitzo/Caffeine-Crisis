import { renderHomepage } from "./renderingFunctions/renderhomePage/renderHomepage.js";
import { setAppEvents } from "./setAppEvents/setAppEvents.js";
import { getOrCreatePlayerId, initPlayerState } from "./appFunctions/gameState.js";
import { initBackgroundLocationTracking } from "./appFunctions/initBackgroundTracking.js";

renderHomepage();
setAppEvents();
initPlayerState();
initBackgroundLocationTracking();