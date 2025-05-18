export function getOrCreatePlayerId () {
    let playerId = localStorage.getItem("playerId");

    if (!playerId) {
        playerId = crypto.randomUUID();
        localStorage.setItem("playerId", playerId);
    }
    
    return playerId;
}

export function loadTasks() {
    const playerId = getOrCreatePlayerId();
    const stored = localStorage.getItem(`playerState_${playerId}`);
}

export function initPlayerState() {
    const id = getOrCreatePlayerId();
    const playerStateKey = `playerState_${id}`;

    if (!localStorage.getItem(playerStateKey)) {
        const initialState = {
            tasks: {
                kaffeFilter: false,
                kaffeMatt: false,
                glasKupol: false,
                kaffeTratt: false,
                kaffeBonor: false
            },
            visitedLocations: {
                orkanen: false,
                ica_maxi: false,
                stapelbaddsparken: false,
                trattplatsen: false
            },
            textMessageShown: false
        };
        localStorage.setItem(playerStateKey, JSON.stringify(initialState));
    }
}

export function getPlayerState() {
    const id = getOrCreatePlayerId();
    const playerStateKey = `playerState_${id}`;
    const raw = localStorage.getItem(playerStateKey);

    return raw ? JSON.parse(raw) : null;
}

export function updateTask(taskKey, value) {
    const id = getOrCreatePlayerId();
    const playerStateKey = `playerState_${id}`;
    const state = getPlayerState();

    if (!state.tasks.hasOwnProperty(taskKey)) {
        console.warn(`Task "${taskKey}" finns inte i state.`);
        return;
    }

    state.tasks[taskKey] = value;
    localStorage.setItem(playerStateKey, JSON.stringify(state));
}

export function updateVisitedLocation(locationKey, value) {
    const id = getOrCreatePlayerId();
    const playerStateKey = `playerState_${id}`;
    const state = getPlayerState();

    if (!state.visitedLocations.hasOwnProperty(locationKey)) {
        console.warn(`Location "${locationKey}" finns inte i state.`);
        return;
    }

    state.visitedLocations[locationKey] = value;
    localStorage.setItem(playerStateKey, JSON.stringify(state));
}

export function updateMessageShown () {
    const id = getOrCreatePlayerId();
    const playerStateKey = `playerState_${id}`;
    const state = getPlayerState();

    state.textMessageShown = true;
    localStorage.setItem(playerStateKey, JSON.stringify(state));
}