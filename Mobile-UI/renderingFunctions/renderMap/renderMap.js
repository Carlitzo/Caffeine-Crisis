import { openAppFunction } from "../../appFunctions/openAppFunction.js";
import { closeAppFunction } from "../../appFunctions/closeAppFunction.js";

export function renderMap(mapIcon) {
    const mapDiv = document.createElement("div");
    const mapReturnButton = document.createElement("button");
    
    mapDiv.id = "map";
    mapReturnButton.id = "mapReturnButton";
    mapReturnButton.textContent = "X";

    mapDiv.appendChild(mapReturnButton);

    openAppFunction(mapIcon, mapDiv);

    mapReturnButton.addEventListener("click", () => {
        closeAppFunction(mapDiv, mapIcon);
    })

    setTimeout(() => {
        initLeafletMap();
    }, 50);
}

function initLeafletMap() {
    // Skapa en Leaflet-karta
    const map = L.map('map', { zoomControl: false}).setView([55.6077, 12.9960], 15); // Västra Hamnens koordinater

    // Lägg till OpenStreetMap baslager
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Exempel på hur du kan lägga till en anpassad markör
    const customIcon = L.icon({
        iconUrl: './images/custom-icon.png', // Ersätt med din egen markörbild
        iconSize: [32, 32],  // Storleken på markören
        iconAnchor: [16, 32], // Där markören fästs på kartan
        popupAnchor: [0, -32] // Var popupen ska öppnas relativt markören
    });

    const userMarker = L.marker([0, 0]);
    userMarker.addTo(map);

    navigator.geolocation.watchPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log(`Spelarens GPS-position: Lat: ${lat}, Lon: ${lon}`);
        
        userMarker.setLatLng([lat, lon]).bindPopup("Din GPS-location").openPopup();

        map.setView([lat, lon], 15);
    },
        (error) => {
            console.log(`${error.message} no position available`);
        },
    {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 30000
    }
    )
}