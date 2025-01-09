// Inisialisasi peta untuk sisi kiri dan kanan dengan sinkronisasi
var mapLeft = L.map('map-left', {
    center: [5.561491, 95.297102],
    zoom: 14,
    zoomControl: true
});

var mapRight = L.map('map-right', {
    center: [5.561491, 95.297102],
    zoom: 14,
    zoomControl: true
});

// Sinkronisasi kedua peta
mapLeft.sync(mapRight);
mapRight.sync(mapLeft);

// Menyiapkan layer tile untuk peta dasar
var baseLayerLeft = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapLeft);

var baseLayerRight = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapRight);

// Variabel untuk menyimpan layer aktif pada kedua peta
var activeLayersLeft = { shp: [], tiff: null };
var activeLayersRight = { shp: [], tiff: null };

// Variabel untuk menyimpan slider opacity
var sliderLeft = null;
var sliderRight = null;

// Fungsi untuk memuat layer berdasarkan tahun
function loadLayer(map, year, activeLayers) {
    let shapefileLayers = [];
    let tiffLayer;

    if (year === '2004') {
        shapefileLayers = ['WEBGIS:ADT2004', 'WEBGIS:DG2004', 'WEBGIS:L2004'];
        tiffLayer = 'WEBGIS:3desa2004';
    } else if (year === '2009') {
        shapefileLayers = ['WEBGIS:ADT2009', 'WEBGIS:DG2009', 'WEBGIS:L2009'];
        tiffLayer = 'WEBGIS:3desa2009';
    } else if (year === '2024') {
        shapefileLayers = ['WEBGIS:ADT2024', 'WEBGIS:DG2024', 'WEBGIS:L2024'];
        tiffLayer = 'WEBGIS:3desa2024';
    }

    // Hapus layer TIFF yang aktif
    if (activeLayers.tiff) {
        map.removeLayer(activeLayers.tiff);
        activeLayers.tiff = null;
    }

    // Tambahkan TIFF layer baru
    if (tiffLayer) {
        activeLayers.tiff = L.tileLayer.wms('http://localhost:8080/geoserver/WEBGIS/wms?', {
            layers: tiffLayer,
            format: 'image/png',
            transparent: true,
            opacity: 1,
            zIndex: 5 // TIFF berada di bawah SHP
        }).addTo(map);
    }

    // Hapus semua SHP layer yang aktif
    activeLayers.shp.forEach(layer => map.removeLayer(layer));
    activeLayers.shp = [];

    // Tambahkan SHP layer baru
    shapefileLayers.forEach(layerName => {
        const shpLayer = L.tileLayer.wms('http://localhost:8080/geoserver/WEBGIS/wms?', {
            layers: layerName,
            format: 'image/png',
            transparent: true,
            opacity: 1,
            zIndex: 10 // SHP di atas TIFF
        }).addTo(map);
        activeLayers.shp.push(shpLayer);
    });
}

// Fungsi untuk memperbarui peta berdasarkan pilihan tahun
function updateMap(mapSide) {
    const yearSelect = document.getElementById(`year-${mapSide}`);
    const selectedYear = yearSelect.value;

    if (mapSide === 'left') {
        loadLayer(mapLeft, selectedYear, activeLayersLeft);
        updateSlider(mapLeft, activeLayersLeft, 'left');
    } else if (mapSide === 'right') {
        loadLayer(mapRight, selectedYear, activeLayersRight);
        updateSlider(mapRight, activeLayersRight, 'right');
    }
}

// Fungsi untuk memperbarui slider opacity
function updateSlider(map, activeLayers, side) {
    // Hapus slider lama jika ada
    if (side === 'left' && sliderLeft) {
        map.removeControl(sliderLeft);
        sliderLeft = null;
    } else if (side === 'right' && sliderRight) {
        map.removeControl(sliderRight);
        sliderRight = null;
    }

    // Tambahkan slider baru
    const slider = L.control({ position: 'topright' });

    slider.onAdd = function () {
        const div = L.DomUtil.create('div', 'opacity-sliders');
        div.innerHTML = `
            <label for="opacity-tiff-${side}">TIFF Opacity:</label>
            <input id="opacity-tiff-${side}" type="range" min="0" max="1" step="0.1" value="1">
            <br>
            <label for="opacity-shp-${side}">SHP Opacity:</label>
            <input id="opacity-shp-${side}" type="range" min="0" max="1" step="0.1" value="1">
        `;
        L.DomEvent.disableClickPropagation(div);
        return div;
    };

    slider.addTo(map);

    // Event listener untuk TIFF opacity
    const tiffSlider = document.getElementById(`opacity-tiff-${side}`);
    if (activeLayers.tiff) {
        tiffSlider.addEventListener('input', function () {
            activeLayers.tiff.setOpacity(this.value);
        });
    }

    // Event listener untuk SHP opacity
    const shpSlider = document.getElementById(`opacity-shp-${side}`);
    shpSlider.addEventListener('input', function () {
        activeLayers.shp.forEach(layer => layer.setOpacity(this.value));
    });

    // Simpan slider baru
    if (side === 'left') {
        sliderLeft = slider;
    } else if (side === 'right') {
        sliderRight = slider;
    }
}

// Inisialisasi slider pertama kali
updateSlider(mapLeft, activeLayersLeft, 'left');
updateSlider(mapRight, activeLayersRight, 'right');
