// Inisialisasi peta dengan LeafletJS
var map = L.map('map').setView([5.552395, 95.296315], 15); 

// Menambahkan layer Tile dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Event listener untuk klik pada peta
map.on('click', onMapClick);
