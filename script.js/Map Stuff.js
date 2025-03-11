// Initialize the map and set its view to the world
var map = L.map('map').setView([20, 0], 2); 
// Centered at latitude 20, longitude 0 with zoom level 2

// Add OpenStreetMap tiles (the background map)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add a marker at the Great Pyramid of Giza (Cairo, Egypt)
L.marker([30.0444, 31.2357]) // Latitude & longitude
    .addTo(map) // Adds it to the map
    .bindPopup('Great Pyramid of Giza') // Shows a popup when clicked
    .openPopup(); // Opens the popup by default
