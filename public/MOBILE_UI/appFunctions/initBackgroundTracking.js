import { updateVisitedLocation, updateTask, getPlayerState } from "./gameState.js";

let backgroundWatchId = null;

export function initBackgroundLocationTracking() {

    backgroundWatchId = navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            // Orkanen
            if (isCloseTo(latitude, longitude, 55.6108, 12.9951) < 100) {
                console.log("visited a spot", "orkanen");
                updateVisitedLocation("orkanen", true);
            }

            // Ica Maxi
            if (isCloseTo(latitude, longitude, 55.6118, 12.9804) < 100) {
                console.log("visited a spot", "ica maxi");
                updateVisitedLocation("ica_maxi", true);
            }

            // Stapelbäddsparken
            if (isCloseTo(latitude, longitude, 55.6130, 12.9850) < 100) {
                console.log("visited a spot", "stapelbäddsparken");
                updateVisitedLocation("stapelbaddsparken", true);
            }

            // Hundrastgården
            if (isCloseTo(latitude, longitude, 55.6149, 12.9784) < 100) {
                console.log("visited a spot", "trattplatsen");
                updateVisitedLocation("trattplatsen", true);
            }
        },
        (error) => {
            console.warn("GPS-fel:", error.message);
        },
        {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 30000
        }
    );
}

function isCloseTo(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // meters
    const toRad = deg => deg * Math.PI / 180;

    const φ1 = toRad(lat1);
    const φ2 = toRad(lat2);
    const Δφ = toRad(lat2 - lat1);
    const Δλ = toRad(lon2 - lon1);

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // in meters
}