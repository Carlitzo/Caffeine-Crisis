export function getOrCreatePlayerId () {
    let playerId = localStorage.getItem("playerId");

    if (!playerId) {
        playerId = crypto.randomUUID();
        console.log(playerId);
        localStorage.setItem("playerId", playerId);
    }

    return playerId;
}