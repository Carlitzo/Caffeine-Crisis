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
    const fyrIcon = L.icon({
        iconUrl: './images/kartikoner/Fyren.png', // Ersätt med din egen markörbild
        iconSize: [42, 42],  // Storleken på markören
        iconAnchor: [16, 32], // Där markören fästs på kartan
        popupAnchor: [0, -32] // Var popupen ska öppnas relativt markören
    });
    
    const varvsparkenIcon = L.icon({
        iconUrl: './images/kartikoner/Varvsparken.png',
        iconSize: [42, 42],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    const agilitybananIcon = L.icon({
        iconUrl: './images/kartikoner/Tratt.png',
        iconSize: [42, 42],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    const icaMaxiIcon = L.icon({
        iconUrl: './images/kartikoner/Kaffemått.png',
        iconSize: [42, 42],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    const orkanenIcon = L.icon({
        iconUrl: './images/kartikoner/Orkanen.png',
        iconSize: [42, 42],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    
    const safeSpaceIcon = L.icon({
        iconUrl: './images/kartikoner/Safespace.png',
        iconSize: [42, 42],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    const niagaraIcon = L.icon({
        iconUrl: './images/kartikoner/Niagara.png',
        iconSize: [42, 42],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    L.marker([55.6125, 12.9958], { icon: fyrIcon }).addTo(map).bindPopup('Malmö Inre Fyr');
    L.marker([55.6144, 12.9797], { icon: varvsparkenIcon }).addTo(map).bindPopup('Varvsparken');
    L.marker([55.6068, 12.9749], { icon: agilitybananIcon }).addTo(map).bindPopup('Agilitybanan');
    L.marker([55.6118, 12.9804], { icon: icaMaxiIcon }).addTo(map).bindPopup('Ica-Maxi-Göran');
    L.marker([55.6108, 12.9951], { icon: orkanenIcon }).addTo(map).bindPopup('Orkanenbiblioteket');
    L.marker([55.6088, 12.9911], { icon: safeSpaceIcon }).addTo(map).bindPopup('Safespace <3');
    L.marker([55.6089, 12.9943], { icon: niagaraIcon }).addTo(map).bindPopup('Niagara');

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