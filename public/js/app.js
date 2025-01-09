// Inisialisasi peta di pusat Indonesia (koordinat tengah)
var map = L.map('map', {
    fullscreenControl: true
}).setView([5.561491, 95.297102], 14);

// Tambahkan tile layer Mapbox dengan access token
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnFodG15IiwiYSI6ImNtMHVpejd3cjEzeWMycnEwZjg1ZWU0eDYifQ.m2ni5UfRzTac8rLVmv7BGA', {
    attribution: 'Map data © OpenStreetMap contributors, Imagery © Mapbox',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

// Variabel untuk menyimpan layers berdasarkan tahun
var layerGroups = {};

// Fungsi untuk memuat SHP dan TIFF dari GeoServer
function loadLayers(year) {
    // Hapus semua layer dari peta terlebih dahulu
    map.eachLayer(function(layer) {
        if (layer !== map._layers[Object.keys(map._layers)[0]]) {
            map.removeLayer(layer); // Menghapus layer yang ada
        }
    });

    // Tentukan layer berdasarkan tahun
    let shapefileLayers = [];
    let tiffLayer = null;
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

    // Simpan layer dalam grup untuk tahun ini
    layerGroups[year] = [];

    // Hapus slider lama
    const opacityControls = document.getElementById('layer-opacity-controls');
    opacityControls.innerHTML = '';

    // Tambahkan SHP layer ke peta dengan slider masing-masing
    shapefileLayers.forEach(layerName => {
        const layer = L.tileLayer.wms('http://localhost:8080/geoserver/WEBGIS/wms?', {
            layers: layerName,
            format: 'image/png',
            transparent: true,
            opacity: 1,
            attribution: 'Data © GeoServer',
            zIndex: 10 // Pastikan SHP berada di atas layer TIFF
        }).addTo(map);

        layerGroups[year].push(layer);

        // Tambahkan slider untuk SHP layer
        const controlDiv = document.createElement('div');
        controlDiv.className = 'opacity-control';

        const label = document.createElement('label');
        label.innerText = `Opacity ${layerName}`;
        controlDiv.appendChild(label);

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.min = 0;
        slider.max = 1;
        slider.step = 0.05;
        slider.value = 1;
        slider.addEventListener('input', function () {
            layer.setOpacity(parseFloat(this.value));
        });
        controlDiv.appendChild(slider);

        opacityControls.appendChild(controlDiv);
    });

    // Tambahkan TIFF layer ke peta dengan slider masing-masing
    const tiffLayerObj = L.tileLayer.wms('http://localhost:8080/geoserver/WEBGIS/wms?', {
        layers: tiffLayer,
        format: 'image/png',
        transparent: true,
        opacity: 1,
        attribution: 'Data © GeoServer',
        zIndex: 5 // Pastikan TIFF berada di bawah SHP
    }).addTo(map);

    // Tambahkan slider untuk TIFF layer
    const controlDivTiff = document.createElement('div');
    controlDivTiff.className = 'opacity-control';

    const labelTiff = document.createElement('label');
    labelTiff.innerText = `Opacity TIFF Tahun ${year}`;
    controlDivTiff.appendChild(labelTiff);

    const sliderTiff = document.createElement('input');
    sliderTiff.type = 'range';
    sliderTiff.min = 0;
    sliderTiff.max = 1;
    sliderTiff.step = 0.05;
    sliderTiff.value = 1;
    sliderTiff.addEventListener('input', function () {
        tiffLayerObj.setOpacity(parseFloat(this.value));
    });
    controlDivTiff.appendChild(sliderTiff);

    opacityControls.appendChild(controlDivTiff);

    // Update legenda
    document.getElementById('legend').src = `http://localhost:8080/geoserver/WEBGIS/wms?REQUEST=GetLegendGraphic&FORMAT=image/png&LAYER=${shapefileLayers[0]}`;
}

// Event listener untuk carousel
var carousel = document.querySelector('#carouselExampleControls');
carousel.addEventListener('slid.bs.carousel', function () {
    const activeIndex = document.querySelector('.carousel-item.active').innerText;
    console.log("Tahun aktif:", activeIndex); // Debugging: Menampilkan tahun yang sedang aktif

    // Pastikan layer sesuai dengan tahun yang dipilih
    if (activeIndex.includes('2004')) {
        loadLayers('2004');
    } else if (activeIndex.includes('2009')) {
        loadLayers('2009');
    } else if (activeIndex.includes('2024')) {
        loadLayers('2024');
    }
});

// Muat layer awal (misal: tahun 2004)
loadLayers('2004');
